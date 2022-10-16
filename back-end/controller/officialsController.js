const { Official } = require('../database/officials/officialsClass')
const officialsDB = new Official() //create a instance new object

// get all the official data from database
const getOfficials = async (request, response) =>{
    try {
        const official = await officialsDB.getOfficials()
        response.json(official)
    } catch (error) {
        console.log(error)
    }
}

// insert official
const insertOfficials = async (request, response)=>{
    try {
        const { name, position, contact, termStart, termEnd, address } = request.body
        const photo = request.file.buffer.toString('base64')

        // validate if all the input are have a value
        if(!name || !position || !contact || !termStart || !termEnd || !address){
            return response.json({ message: 'Please fill up all the field!' })
        }

        //validate contact number if its valid phone number
        if(contact.length > 11 || contact.length < 11){
            return response.json({ message: 'Contact not valid!' })
        }

        // save to database if no error found
        await officialsDB.insertOfficials(name, position, contact, termStart, termEnd, address, photo)
        response.json({ message: 'success' })
        
    } catch (error) {
        response.json({ message: 'Image cannot be empty!' })
    }
}   

//delete official
const deleteOfficial = async (request, response) =>{
    try {
        const officialID = request.query.id
        await officialsDB.deleteOfficial(officialID)
        response.json({ message: 'success' })
    } catch (error) {
        console.log(error)
    }
}

//get official data by id
const getOfficialById = async (request, response) =>{
    try {
        const officialID = request.query.id
        const officialInfo = await officialsDB.getOfficialById(officialID)
        response.json(officialInfo)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getOfficials,
    insertOfficials,
    deleteOfficial,
    getOfficialById
}