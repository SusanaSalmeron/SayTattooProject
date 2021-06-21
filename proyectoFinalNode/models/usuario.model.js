const format = require('date-format');

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id = ? and tatuador ="No"', [id], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    })
}

const create = ({ nombre, sexo, direccion, ciudad, cp, telefono, fechaNacimiento, nombreUsuario, email, password, tatuador, proteccionDatos }) => {
    const newDate = format("yyyy-MM-dd", format.parse("dd/MM/yyyy", fechaNacimiento))
    console.log(newDate)
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios(nombre, sexo, direccion, ciudad, cp, telefono, fechaNacimiento, nombreUsuario, email, password, tatuador, proteccionDatos) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, sexo, direccion, ciudad, cp, telefono, newDate, nombreUsuario, email, password, tatuador, proteccionDatos], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const deleteById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('delete from usuarios where id = ?', [id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        })
    })
}

const modifyById = (id, { nombre, direccion, ciudad, cp, telefono, email, password, repetirPassword }) => {
    return new Promise((resolve, reject) => {
        db.query('update usuarios set nombre = ?, direccion = ?, ciudad = ?, cp = ?, telefono = ?, email =?, password = ?, repetirPassword = ? where id = ?', [nombre, direccion, ciudad, cp, telefono, email, password, repetirPassword, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const getByMail = (email) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from usuarios where email = ?', [email], (err, rows) => {
                if (err) reject(err);
                if (rows.length !== 1) resolve(null);
                resolve(rows[0]);
            }
        )
    });
}


const getFavsById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT tf.fk_usuario_tatuador_id as id, u.nombre, u.imgPerfil, u.ciudad, e.estilo FROM tatuadores_favoritos tf inner join tbi_tatuadoresEstilos te on tf.fk_usuario_tatuador_id = te.fk_tatuador inner join estilos e on e.id = te.fk_estilo inner join usuarios u on u.id = tf.fk_usuario_tatuador_id where tf.fk_usuario_id = ?', [id], (err, rows) => {
            console.log(2)
            if (err) reject(err);
            resolve(rows)
        })
    })
}








module.exports = { create, getById, deleteById, modifyById, getByMail, getFavsById };