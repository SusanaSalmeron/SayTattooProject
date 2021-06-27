const getAllBy = (params) => {
    let where = "";
    let values = []
    if (params.wildcard) {
        //Metemos las condiciones
        const columns = ["u.nombre", "u.sobreMi", "u.ciudad", "u.cp"];
        for (let col of columns) {
            values.push(`%${params.wildcard}%`);
        }
        let conditions = columns.map(col => `${col} LIKE ?`);

        //Mezclamos todo
        where += `and (${conditions.join(" or ")}) `
    }
    if (params.style) {
        where += `and e.estilo LIKE ? `
        values.push(params.style)
    }

    console.log(`WHERE = ${where}`);
    console.log(`VALUES = ${values}`);
    return new Promise((resolve, reject) => {
        db.query(`
            select u.id, u.nombre, u.email, u.imgPerfil, u.sobreMi, u.telefono, GROUP_CONCAT(e.estilo) as estilos, u.ciudad, u.cp
            from usuarios u
            left outer join tbi_tatuadoresEstilos te on u.id = te.fk_tatuador
            left outer join estilos e on e.id = te.fk_estilo
            where u.tatuador = 'SI' ${where}
            GROUP BY u.id`, values, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        })
    });
};


const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id = ? and tatuador ="Sí"', [id], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    })


}

const getPicsByParams = (id, style) => {
    const dbStyle = style ? style : "%";
    return new Promise((resolve, reject) => {
        db.query('select imagen from tatuajes inner join estilos ON tatuajes.fk_estilos = estilos.id where tatuajes.fk_usuario_tatuador_id = ? and estilos.estilo like ?', [id, dbStyle], (err, rows) => {
            if (err) reject(err);
            resolve(rows)
        })
    })

}

const addPic = (id, { imagen, estilo }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into tatuajes(imagen, fk_estilos, fk_usuario_tatuador_id) values(?, ?, ?)', [imagen, estilo, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const deleteImageById = (tUserId, imgId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from tatuajes where id = ? and fk_usuario_tatuador_id = ?',
            [imgId, tUserId], (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
    })
}

const updateProfilePic = (imgPerfil, userId, sobreMi) => {
    return new Promise((resolve, reject) => {
        console.log("Updating user")
        db.query('update usuarios set imgPerfil = ?, sobreMi = ? where id = ?', [imgPerfil, userId, sobreMi], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}

const deleteOldStyles = (userId) => {
    return new Promise((resolve, reject) => {
        console.log("Deleting all styles");
        db.query('delete from tbi_tatuadoresEstilos where fk_tatuador = ?', [userId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const addStyleToUser = (styleId, userId) => {
    return new Promise((resolve, reject) => {
        console.log("Deleting all styles");
        db.query('insert into tbi_tatuadoresEstilos(fk_estilo, fk_tatuador) value(?, ?)', [styleId, userId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}


const addPics = (userId, url) => {
    return new Promise((resolve, reject) => {
        db.query('insert into tatuajes (imagen, fk_usuario_tatuador_id) values(?, ?)', [url, userId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}







module.exports = { getById, getPicsByParams, addPic, deleteImageById, updateProfilePic, deleteOldStyles, addStyleToUser, getAllBy, addPics };