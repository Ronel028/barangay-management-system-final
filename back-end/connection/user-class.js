
class Admin{

    query = 'INSERT INTO admin_account VALUES(NULL, ?, ?)'

    constructor(username, password){
        this.username = username
        this.password = password
    }

    login = (db) =>{
        return new Promise((resolve, reject)=>{
            db.query(this.query, [this.username, this.password], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

module.exports = Admin