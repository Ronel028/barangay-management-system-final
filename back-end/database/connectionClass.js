const mysql = require('mysql')

class DbConfig{

    #host = 'localhost'
    #user = 'root'
    #password = ''
    #database = 'db_bms'
    #connection

    dbConnect = () =>{
        this.#connection = mysql.createPool({
            connectionLimit: 100,
            host: this.#host,
            user: this.#user,
            password: this.#password,
            database: this.#database
        })

        return this.#connection
    }

}

module.exports = DbConfig;