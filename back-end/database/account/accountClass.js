const DbConfig = require("../connectionClass");

class Account extends DbConfig{

    #insertQuery = 'INSERT INTO admin_account VALUES(null, ?, ?)'
    #getByUsernameQuery = 'SELECT * FROM admin_account WHERE username=?'

    constructor(username, password){
        super()
        this.username = username
        this.password = password
    }

    register = () =>{
        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#insertQuery, [this.username, this.password], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    login = () =>{
        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#getByUsernameQuery, [this.username], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}

module.exports = Account