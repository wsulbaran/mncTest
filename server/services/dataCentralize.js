
const tvmazeController = require('../controllers/tvmazeController')
const ituneController = require('../controllers/itunesController')

const DataCentalize = async (req, res) => {
  try {
    const dataTvmaze = await  tvmazeController(req.params.search);
    const dataItune = await ituneController(req.params.search);
    const dataCentralize = {
      tvmaze:dataTvmaze,
      itune:dataItune
    }

    console.log(dataCentralize);
    res.status(201).json(dataCentralize);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
}



module.exports = DataCentalize;
