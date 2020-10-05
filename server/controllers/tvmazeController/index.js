
const fetchService =  require('../../services/fetch');
const config  = require('../../config/')

module.exports = tvMazeController = async (data) => {

  const uri = config.TVMAZE_URI;
  const SearchData = await  fetchService('get',uri,{q:data});
  const newData = SearchData.map(item => {
    console.log();
    return {
      _id:0,
      name: item.show.name,
      type: item.show.type,
      origin: '/tvm-logo.png',
      img: (item.show.image)? item.show.image.medium:"",
      link: (item.show.url)? item.show.url:""
    }
  })

  return newData;
}
