
const soap = require('soap')
const config = require('../config')


const SoapServices = async () => {

  const soap_fetch =  soap.createClientAsync(config.SOAP_URI,)
  .then((client) => {
    return client.describe()
  })
  .then((result) => {
    return result;
  })

  return soap_fetch;
}


module.exports = SoapServices;
