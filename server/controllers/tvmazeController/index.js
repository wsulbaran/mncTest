
const fetchService =  require('../../services/fetch');
const config  = require('../../config/')

module.exports = tvMazeController = async (data) => {

  const uri = config.TVMAZE_URI;
  const SearchData = await  fetchService('get',uri,{q:data});
  const newData = SearchData.map(item => {
    return {
      name: item.show.name,
      type: item.show.type,
      chanel: (item.show.webChannel)? item.show.webChannel.name:item.show.network.name
    }
  })

  newData.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  return newData;
}
