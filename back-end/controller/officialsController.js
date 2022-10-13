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


module.exports = {
    getOfficials
}