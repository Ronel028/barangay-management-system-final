const dbConnection = require('../connectionClass')

class Official extends dbConnection{

    #selectQuery = 'SELECT * FROM tbl_officials'
    #insertQuery = 'INSERT INTO tbl_officials VALUES(null, ?, ?, ?, ?, ?, ?, ?)'

    getOfficials = () =>{
        return new Promise((resolve, reject) =>{
            this.dbConnect().query(this.#selectQuery, (error, result) =>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    insertOfficials = (name, position, contact, termStart, termEnd, address, photo)=>{
        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#insertQuery, [
                name, position, contact, termStart, termEnd, address, photo
            ], (error, result) =>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

}

module.exports = { Official }