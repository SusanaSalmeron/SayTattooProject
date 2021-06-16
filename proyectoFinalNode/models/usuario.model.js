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
        db.query('select * from usuarios where id = ?', [id], (err, rows) => {
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








module.exports = { getAll, create, getById, deleteById };