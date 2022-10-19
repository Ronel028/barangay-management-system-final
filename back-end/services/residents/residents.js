const DbConfig = require("../../database/connectionClass");

class Resident extends DbConfig{

    //get all resident data
    getResidents = async (request, response) =>{
        try {
            const query = `SELECT * FROM tbl_residence`

            const resident = await this.queryData(query)
            response.json(resident)

        } catch (error) {
            response.json({ message: "Something's wrong!" })
        }
    }

    //insert new resident
    insertResident = async (request, response) =>{
        try {
            //get the coming request from the body
            const { 
                lname, fname, mname, dateOfBirth, placeOfBirth, age, gender, contact, purok, 
                totalHousehold, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
                lengthOfStay, religion, nationality, educationAttainment, houseOwnership, formerAddress,
            } = request.body
            
            //get the photo from multer middleware
            const residentPhoto = request.file.buffer.toString('base64')

            //function that capitalize first letter and lowercase the rest of the letter
            const capitalizeString = (string)=>{
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }

            // create a condition if the data comes from the body are empty
            if(!request.body){
                return response.json({ message: 'Please fill-up all the field!' })
            }
            

            // check if condition in the contact info is valid
            if(contact.length < 11 || contact.length > 11){
                return response.json({ message: 'Please input valid contact!' })
            }

            // query
            const query = `INSERT INTO tbl_residence 
                                VALUES(null,'${capitalizeString(lname)}','${capitalizeString(fname)}','${capitalizeString(mname)}',
                                        '${dateOfBirth}','${placeOfBirth}',${age},'${gender}','${contact}','${purok}',
                                        ${totalHousehold},'${pwd}','${relationToHead}','${civilStatus}','${bloodType}',
                                        '${occupation}',${monthlyIncome},${lengthOfStay},'${religion}','${nationality}',
                                        '${educationAttainment}','${houseOwnership}','${formerAddress}','${residentPhoto}',now())`
            
            
            await this.queryData(query)
            response.redirect('/resident')

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = { Resident }