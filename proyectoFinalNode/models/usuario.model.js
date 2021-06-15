const getAll = () => {
    const prom = new Promise((resolve, reject) => {
        console.log(1)
        db.query('SELECT * FROM usuarios where tatuador = "Sí"', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
    return prom;
};







module.exports = { getAll };