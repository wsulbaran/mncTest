
const fetchService =  require('../../services/fetch');
const config  = require('../../config/')


module.exports = itunesController = async (data) => {

  const SearchData = await fetchService('get',config.ITUNES_APPLE_URI,{term:data})
  .then((data) => {
    if ( data && data.results ){
      return data.results;
    }
    return [];
  });

  const newData = SearchData.map(item => {
    return {
      name: item.trackName,
      type: item.primaryGenreName,
      description: item.shortDescription
    }
  })

  newData.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  return newData;
}
