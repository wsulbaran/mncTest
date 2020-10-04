
const fetchService =  require('../../services/fetch');
const config  = require('../../config/');
var convert = require('xml-js');


module.exports = PersonController = async (data) => {
  let newArray = []
  const SearchData = await fetchService('get',config.SOAP_URI,{soap_method: 'QueryByName', name: data})
  .then( (res) => {
    return res;
  });

  let newData = JSON.parse(convert.xml2json(SearchData, {compact: true, spaces: 4}));
  newData = newData['SOAP-ENV:Envelope']['SOAP-ENV:Body']['QueryByNameResponse']['QueryByNameResult']['diffgr:diffgram']['QueryByName_DataSet'];

  if(newData['QueryByName']){
    console.log('vacilatela');
    newData = newData['QueryByName'];
    newData.map(item => {
      console.log(item['Name']['_text']);
      newArray.push({
        _id:0,
        name: item['Name']['_text'],
        type:"Persona",
        origin: "CRCIND"
      })
    })
  } else {
    newData = [];
  }
  return newArray;
}

