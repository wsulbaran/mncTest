
const tvmazeController = require('../controllers/tvmazeController')

const DataCentalize = async (req, res) => {
  try {
    const dataTvmaze = await  tvmazeController(req.params.search);

    res.status(201).json(dataTvmaze);
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
}



module.exports = DataCentalize;
