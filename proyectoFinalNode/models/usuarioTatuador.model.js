const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM usuarios where tatuador = "Sí"', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
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

const moreDataByID = (tUserId, imgPerfil, sobreMi, estilos) => {
    console.log("imgPerfil: " + imgPerfil);
    console.log("sobreMi: " + sobreMi);
    console.log("estilos: " + estilos);
    return new Promise((resolve, reject) => {
        db.query('update usuarios set imgPerfil = ? where id =?', [imgPerfil, tUserId])
        db.query('delete from tbi_tatuadoresEstilos where fk_tatuador = ?', [tUserId])
        for (let estilo of estilos) {
            db.query('insert into tbi_tatuadoresEstilos(fk_estilo,      fk_tatuador) value(?, ?)', [estilo, tUserId], (err, result) => {
                if (err) reject(err);
                resolve(result);
            })
        }
    })
}








module.exports = { getAll, getById, getPicsByParams, addPic, deleteImageById, moreDataByID };