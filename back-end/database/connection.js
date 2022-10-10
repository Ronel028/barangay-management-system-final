const mysql = require('mysql')

function dbConnection(){
    const db = mysql.createPool({
            connectionLimit: '100',
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'db_bms'
        })

    return db;

}

module.exports = dbConnection;