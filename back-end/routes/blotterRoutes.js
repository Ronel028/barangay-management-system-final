const express = require('express')
const { Blotter } = require('../services/blotter/blotter')
const router = express.Router()

// create instance of Blotter
const blotter = new Blotter()

// endpoint
router.get('/', blotter.getBlotterData)
router.post('/insert', blotter.insertBlotterData)
router.get('/blotter', blotter.getBlotterById)
router.delete('/delete', blotter.deleteBlotter)

module.exports = router