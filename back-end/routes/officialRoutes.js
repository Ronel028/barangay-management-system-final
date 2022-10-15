const express = require('express')
const multer = require('multer')
const router = express.Router()
const { getOfficials, insertOfficials } = require('../controller/officialsController')

//creating storage for using multer
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, '../front-end/src/pages/officials/image')
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const filename = uniqueSuffix + '--' + file.originalname
        const image = filename.replace(/ /g, '-')
        cb(null, image)
    }
})
const upload = multer({ storage: storage })

// create endpoint for get all the list of brgy officials
router.get('/', getOfficials)
router.post('/insert',upload.single('officialsPhoto'), insertOfficials )

module.exports = router