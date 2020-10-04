
const express = require('express')
const router = express.Router()
const dataCentralizeService = require('../services/dataCentralize')


router.get('/cetralize-data/:search', dataCentralizeService )


module.exports = router;
