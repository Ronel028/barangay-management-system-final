const express = require('express')
const multer = require('multer')
const router = express.Router()
const { Official } = require('../services/officials/officials')
const Officials = new Official()

//creating storage for using multer
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// create endpoint for get all the list of brgy officials
router.get('/', Officials.getOfficials)
router.post('/insert',upload.single('officialsPhoto'), Officials.insertOfficial)
router.delete('/delete', Officials.deleteOfficial)
router.get('/data', Officials.getOfficialById)
router.post('/update', upload.single('officialPhoto'), Officials.updateOfficial)




module.exports = router