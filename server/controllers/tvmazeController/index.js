
const fetchService =  require('../../services/fetch');
const config  = require('../../config/')

module.exports = tvMazeController = async (data) => {

  const uri = config.TVMAZE_URI;
  const SearchData = await  fetchService('get',uri,{q:data});
  console.log('SearchData ',SearchData);
  const newData = SearchData.map(item => {
    return {
      name: item.show.name,
      type: item.show.type,
      chanel: (item.show.webChannel)? item.show.webChannel.name:item.show.network.name
    }
  })

  return newData;
}
