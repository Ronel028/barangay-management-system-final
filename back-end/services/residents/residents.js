const DbConfig = require("../../database/connectionClass");
const { capitalizeString } = require('../../custom/customFunction')

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
                totalFamilyMember, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
                lengthOfStay, religion, nationality, educationAttainment, houseOwnership, formerAddress,
            } = request.body
            
            //get the photo from multer middleware
            const residentPhoto = request.file.buffer.toString('base64')

            // create a condition if the data comes from the body are empty
            if(!request.body){
                return response.json({ message: 'Please fill-up all the field!' })
            }
            

            // check if condition in the contact info is valid
            if(contact.length < 11 || contact.length > 11){
                return response.json({ message: 'Please input valid contact!' })
            }

            // query
            const query = `INSERT INTO tbl_residence VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now())`
            const data = [capitalizeString(lname), capitalizeString(fname), capitalizeString(mname), 
                            dateOfBirth, placeOfBirth, age, gender, contact, purok,totalFamilyMember, 
                            pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,lengthOfStay, 
                            religion, nationality, educationAttainment, houseOwnership, formerAddress, residentPhoto
                        ]
            
            //execute this code if no error found
            await this.queryData(query, data)
            response.redirect('/resident')

        } catch (error) {
            response.json({ message: 'Image cannot be empty!' })
        }
    }

    // get resident data by id
    getResidentById = async (request, response) =>{
        try {

            const residentID = request.query.id

            // query
            const query = `SELECT * FROM tbl_residence WHERE id=?`
            const data = [residentID]

            //execute this code if no error found
            const resident = await this.queryData(query, data)
            response.json(resident)

        } catch (error) {
            response.json({ message: 'Somethings wrong with the server! Please try again...' })
        }
    }

    //delete resident data
    deleteResident = async (request, response) =>{
        try {
            
            const residentID = request.query.id

            //query
            const query = 'DELETE FROM tbl_residence WHERE id=?'
            const data = [residentID]

            //execute this code if no error found
            await this.queryData(query, data)
            response.redirect(303, '/resident')

        } catch (error) {
            response.json({ message: 'Somethings wrong with the server! Please try again...' })
        }
    }

}

module.exports = { Resident }