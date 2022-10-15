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

const insertOfficials = async (request, response)=>{
    try {
        const { name, position, contact, termStart, termEnd, address } = request.body
        const officialPhoto = request.file.filename
        const photo = officialPhoto.replace(/ /g, '-') // escaping all the spacing in filename of image

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


module.exports = {
    getOfficials,
    insertOfficials
}