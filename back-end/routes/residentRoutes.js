const express = require('express')
const multer = require('multer')
const router = express.Router()
const { getResidentData, insertResident } = require('../controller/residentController')

// creating storage for multer
const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

// creating endpoint
router.get('/', getResidentData)
router.post('/insert', upload.single('residentPhoto'), insertResident)

module.exports = router