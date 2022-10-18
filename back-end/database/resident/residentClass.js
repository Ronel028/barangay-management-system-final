const DbConfig = require("../connectionClass");

class Resident extends DbConfig {

    #query

    //get all resident data
    getResidentData = () =>{

        this.#query = this.sqlQuery('SELECT * FROM tbl_residence')

        return new Promise((resolve, reject) =>{
            this.dbConnect().query(this.#query, (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }

    //insert resident data
    insertResident = (lname, fname, mname, dateOfBirth, placeOfBirth, age, gender, contact, purok, 
            totalHoushold, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
            lengthOfStay, religion, nationality, educationAttainment, houseOwnerShip, formerAddress,
            photo
        ) =>{

        this.#query = this.sqlQuery('INSERT INTO tbl_residence VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())')
        
        return new Promise((resolve, reject)=>{
            this.dbConnect().query(this.#query, [
                lname, fname, mname, dateOfBirth, placeOfBirth, age, gender, contact, purok, 
                totalHoushold, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
                lengthOfStay, religion, nationality, educationAttainment, houseOwnerShip, formerAddress,
                photo
            ], (error, result)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(result)
                }
            })
        })
    }


}

module.exports = { Resident }