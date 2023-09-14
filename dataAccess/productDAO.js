const db = require('../config/db')

//enviar consulta a base de datos -> query -> Asincrona

class ProductDAO {

    constructor(){}

    insertProduct(producto, callback) {
        const insertQuery = `INSERT INTO products (nombre,precio,descripcion) VALUES ('${producto.name}', '${producto.price}', '${producto.description}')`


        db.query(insertQuery, (err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(result)
            }
        })
    }

    /**
     * Método utilizado para seleccionar productos
     * @param {*} producto 
     * @param {*} callback 
     */
    selectProduct(callback) {
        const selectQuery = `Select * from products`


        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(result)
            }
        })
    }
    
    /**
     * Método utilizado para actualizar productos
     * @param {*} producto 
     * @param {*} callback 
     */
    updateProduct(IdProduct,callback) {
        const selectQuery = `Update products set nombre= '${producto.name}', precio='${producto.price}', despcription='${producto.description}' where id = '${IdProduct}`

        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(result)
            }
        })
    }
 
    
    /**
     * Método utilizado para elimianr productos
     * @param {*} producto 
     * @param {*} callback 
     */
    deleteProduct(callback) {
        const selectQuery = `Delete from productswhere id = '${producto.id}`


        db.query(selectQuery, (err, result) => {
            if (err) {
                callback(err)
            } else {
                callback(result)
            }
        })
    }

    
}

module.exports = ProductDAO;