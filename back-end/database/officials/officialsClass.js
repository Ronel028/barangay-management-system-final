const dbConnection = require('../connectionClass')

class Official extends dbConnection{
    
    #query

    // get method
    getOfficials = () =>{

        this.#query = this.sqlQuery('SELECT * FROM tbl_officials')

        return new Promise((resolve, reject) =>{
            this.dbConnect().query(this.#query, (error, result) =>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    // insert method
    insertOfficials = (name, position, contact, termStart, termEnd, address, photo)=>{

        this.#query = this.sqlQuery('INSERT INTO tbl_officials VALUES(null, ?, ?, ?, ?, ?, ?, ?)')

        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#query, [
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

    //delete method
    deleteOfficial = (id) =>{

        this.#query = this.sqlQuery('DELETE FROM tbl_officials WHERE id=?')

        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#query, [id], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    // get data of official by id
    getOfficialById = (id) =>{

        this.#query = this.sqlQuery('SELECT * FROM tbl_officials WHERE id=?')

        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#query, [id], (error, result)=>{
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