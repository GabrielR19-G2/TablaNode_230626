const mysql = require ('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    // password:'itson',
    password:'Manchis5',
    database:'store'
})

module.exports = connection //para poder usarlo en otras clases
