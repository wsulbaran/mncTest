
const express = require('express')
const router = express.Router()
const dataCentralizeService = require('../services/dataCentralize')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');


router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router.get('/cetralize-data/:search', dataCentralizeService );


module.exports = router;
