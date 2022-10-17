const { Resident } = require('../database/resident/residentClass')
const residentModel = new Resident()

//get all resident data
const getResidentData = async (request, response)=>{
    try {
        const resident = await residentModel.getResidentData()
        response.json(resident)
    } catch (error) {
        response.json({ message: "Something's wrong!" })
    }
}

/* 

lname, fname, mname, dateOfBirth, placeOfBirth, age, gender, contact, purok, 
totalHoushold, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
lengthOfStay, religion, nationality, educationAttainment, houseOwnerShip, formerAddress,
photo

*/

const insertResident = async (request, response) =>{
    try {
        //get the coming request from the body
        const { 
            lname, fname, mname, dateOfBirth, placeOfBirth, age, gender, contact, purok, 
            totalHousehold, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
            lengthOfStay, religion, nationality, educationAttainment, houseOwnerShip, formerAddress,
        } = request.body

        //get the photo from multer middleware
        const residentPhoto = request.file.buffer.toString('base64')

        // create a condition if the data comes from the body are empty
        if(request.body === ''){
            return response.json({ message: 'Please fill-up all the field!' })
        }

        // condition in the contact info is valid
        if(contact.length < 11 || contact.length > 11){
            return response.json({ message: 'Please input valid contact!' })
        }

        await residentModel.insertResident(
            lname, fname, mname, dateOfBirth, placeOfBirth, age, gender, contact, purok, 
            totalHousehold, pwd, relationToHead, civilStatus, bloodType, occupation, monthlyIncome,
            lengthOfStay, religion, nationality, educationAttainment, houseOwnerShip, formerAddress,
            residentPhoto
        )
        response.json({ message: 'success' })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getResidentData,
    insertResident
}