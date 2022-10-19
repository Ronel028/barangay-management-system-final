const express = require('express')
const multer = require('multer')
const router = express.Router()
const { Resident } = require('../services/residents/residents')
const residents = new Resident()

// creating storage for multer
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// creating endpoint
router.get('/', residents.getResidents)
router.post('/insert', upload.single('residentPhoto'), residents.insertResident)

module.exports = router