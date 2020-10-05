
const tvmazeController = require('../controllers/tvmazeController')
const ituneController = require('../controllers/itunesController')
const personController = require('../controllers/personController')
const asigneId = require('./Utilitied')
var convert = require('xml-js');


const DataCentalize = async (req, res) => {
  try {
    if (req.params.search){
      const dataSearch  = req.params.search.toLowerCase()
      const dataTvmaze = await  tvmazeController(dataSearch);
      const dataItune = await ituneController(dataSearch);
      const dataPerson = await personController(dataSearch);
      const funsionData = dataTvmaze.concat(dataItune,dataPerson)

      funsionData.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
      const dataCentralize = {
        data:asigneId(funsionData),
      }
      res.status(201).json(dataCentralize);
    } else {
      throw new Error('Debe ingresar el parametro de busqueda');
    }

  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
}



module.exports = DataCentalize;
