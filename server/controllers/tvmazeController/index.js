
const fetchService =  require('../../services/fetch');
const config  = require('../../config/')

module.exports = tvMazeController = async (data) => {

  const uri = config.TVMAZE_URI;
  const SearchData = await  fetchService('get',uri,{q:data});
  const newData = SearchData.map(item => {
    return {
      _id:0,
      name: item.show.name,
      type: item.show.type,
      origin: 'tvmaze'
    }
  })

  return newData;
}
