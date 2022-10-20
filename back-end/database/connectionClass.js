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

    sqlQuery = (query) =>{
        return query
    }

    queryData = (query, data) =>{
        return new Promise((resolve, reject)=>{
            this.dbConnect().getConnection(error =>{
                if(error){
                    reject(error)
                }else{
                    this.dbConnect().query(query, data, (error, result)=>{
                        if(error){
                            reject(error)
                        }else{
                            resolve(result)
                        }
                    })
                }
            })
        })
    }

}

module.exports = DbConfig;