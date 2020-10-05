
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
      _id:0,
      name: (item.trackName)?item.trackName:item.artistName,
      type: (item.kind)?item.kind:item.wrapperType,
      origin: '/itunes_logo.png',
      img:item.artworkUrl100,
      link:item.trackViewUrl
    }
  })

  return newData;
}
