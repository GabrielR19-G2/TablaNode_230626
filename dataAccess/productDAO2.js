const db = require('../config/db');

class ProductDAO2 {
    constructor() { }

    /**Método utilizado para insertar un producto nuevo*/
    insertProduct(product) {
        return new Promise((resolve, rej) => {
            const insertQuery = `INSERT INTO products (nombre, precio, description) VALUES (?,?,?)`;
            const values = [product.name, product.price, product.description];
            db.query(insertQuery, values, (err, res) => {
                if (err) {
                    rej(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    selectProduct() {
        return new Promise((resolve, rej) => {
            const insertQuery = `SELECT * FROM products;`;
            db.query(insertQuery, (err, res) => {
                if (err) {
                    rej(err);
                } else {
                    resolve(res);
                    console.log(res);
                }
            })
        })
    }
    /**Método usado para actualizar productos */
    updateProduct(idProducto,name,price,descripcion) {
        return new Promise((resolve, rej) => {
            const updateQuery = `Update products set nombre= '${name}', precio='${price}', description='${descripcion}' where id = ${idProducto}`
            db.query(updateQuery, (err, res) => {
                if (err) {
                    rej(err)
                } else {
                    resolve(res)
                }
            })
        })
    }
    deleteProduct(idProducto) {
return new Promise((resolve,rej)=>{
    const selectQuery = `Delete from products where id = ${idProducto}`


        db.query(selectQuery, (err, res) => {
            if (err) {
                rej(err)
            } else {
                resolve(res)
            }
        })
})        
    }
}

module.exports = new ProductDAO2();