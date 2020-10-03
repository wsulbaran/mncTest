
const axios = require('axios');



module.exports = fetchService = async (method ,uri, options) => {
  return await axios({
    method:method,
    url:uri,
    params:options
  })
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  })
}
