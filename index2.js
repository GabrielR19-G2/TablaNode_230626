const db = require('./config/db.js');
const productDAO = require('./dataAccess/productDAO2.js')
const Product = require('./models/productModel.js');

db.connect((err) => {
    if (err) {
        console.log('Error al conectar a la base de datos! 1');
        // console.log(`Error: ${err}`);
        return //para que detenga el proceso
    }

    console.log('Conexión exitosa!');

    // Agregando un producto
    // const newProduct = new Product(null, 'Adobadas', 10.99, 'Papas con sabor adobado');
    // productDAO.insertProduct(newProduct, (err, res) => {
    //     if (err) {
    //         console.log('Error al insertar el producto ', err);
    //     } else {
    //         console.log('Producto insertado con éxito ', res);
    //     }
    // })

    // productDAO.selectProduct((err, res) => {
    //     if (err) {
    //         console.log('Error al cargar los productos ', err);
    //     } else {
    //         console.log("Productos: ", res);
    //     }
    // })
    // const productoActualizar = new Product(2,'Prueba',19.99,'Prueba');
    // productDAO.updateProduct(8,'Tostadas','23.45','Sabor desconocido', (err, res) => {
    //     if (err) {
    //         console.log('Error al actualizar el producto:  ', err);
    //     } else {
    //         console.log("Producto actualizado con éxito ", res);
    //     }
    // })
    productDAO.deleteProduct(8, (err, res) => {
        if (err) {
            console.log('Error al eliminar el producto:  ', err);
        } else {
            console.log("Producto eliminado con éxito ", res);
        }
    })

    db.end((err) => {
        if (err) {
            console.log('Error al desconectarse a la base de datos');
            return
        }
        console.log('Desconexión exitosa');
    })

})