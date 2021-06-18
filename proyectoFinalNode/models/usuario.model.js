

const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('select * from usuarios where id = ? and tatuador ="No"', [id], (err, rows) => {
            if (err) reject(err);
            if (rows.length !== 1) resolve(null);
            resolve(rows[0]);
        })
    })


}

const create = ({ nombre, sexo, direccion, ciudad, cp, telefono, fechaNacimiento, nombreUsuario, email, password, repetirPassword, tatuador, proteccionDatos }) => {
    return new Promise((resolve, reject) => {
        db.query('insert into usuarios(nombre, sexo, direccion, ciudad, cp, telefono, fechaNacimiento, nombreUsuario, email, password, repetirPassword, tatuador, proteccionDatos) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nombre, sexo, direccion, ciudad, cp, telefono, fechaNacimiento, nombreUsuario, email, password, repetirPassword, tatuador, proteccionDatos], (err, result) => {
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
    console.log(12)
    return new Promise((resolve, reject) => {
        db.query('update usuarios set nombre = ?, direccion = ?, ciudad = ?, cp = ?, telefono = ?, email =?, password = ?, repetirPassword = ? where id = ?', [nombre, direccion, ciudad, cp, telefono, email, password, repetirPassword, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}








module.exports = { create, getById, deleteById, modifyById };