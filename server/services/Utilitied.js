





const asigneId = (data) => {
  for (let index = 0; index < data.length; index++) {
    data[index]['_id'] = index
  }
  return data;
}

module.exports = asigneId;
