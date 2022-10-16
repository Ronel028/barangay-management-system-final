const express = require('express')
const multer = require('multer')
const router = express.Router()
const { getOfficials, insertOfficials, deleteOfficial, getOfficialById } = require('../controller/officialsController')

//creating storage for using multer
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// create endpoint for get all the list of brgy officials
router.get('/', getOfficials)
router.post('/insert',upload.single('officialsPhoto'), insertOfficials)
router.delete('/delete', deleteOfficial)
router.get('/data', getOfficialById)

module.exports = router