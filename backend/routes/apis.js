const express = require('express');
const { dumpData, getData } = require('../controllers/logics');


const router = express.Router()

router.post('/add-data',dumpData)
router.get('/data/:search',getData)


module.exports = router;