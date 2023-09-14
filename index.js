const db = require('./config/db.js');
const productoDAO = require('./dataAccess/productDAO.js')
const producto = require('./models/productModel.js')
const Product = require('./models/productModel.js');

db.connect((err) => {
    if(err){
        console.log('Error al conectar a la base de datos!');
        return //para que detenga el proceso
    }
    
    console.log('Conexión exitosa!');
    
    const newProduct = new Product('cocacola',10,'Bebidasaborizada');
    productoDAO.insertProduct(newProduct,(err,res)=>{
        if(err){
            console.log('Error al insertar en la base de datos');
        }else{
            console.log('Producto insertado de manera exitosa: ' + res);
        }
    })


    db.end((err)=>{
        if(err){
            console.log('Error al desconectarse a la base de datos');
            return
        }
        console.log('Desconexión exitosa');
    })

})