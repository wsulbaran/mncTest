
import axios from 'axios';
import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';




const TableCentralizeData = ({search}) => {
  const [data, setData] = useState([]);
  const columns =  [
      { dataField: '_id', text: 'ID', sort: true },
      { dataField: 'name', text: 'Nombre', sort: true },
      { dataField: 'type', text: 'Tipo', sort: true },
      { dataField: 'origin', text: 'Origen' }
  ];
  const defaultSorted = [{
    dataField: '_id',
    order: 'asc'
  }];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    //showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });
  useEffect(()=> {
    let ignore = false;
    const getData = async () => {
      let result = await axios.get(`http://localhost:3000/cetralize-data/${search.search}`);
      result = await result.data;
      if (!ignore) setData(result.data);
    }
    getData();
    return () => { ignore = true };
  },[search.search])
  console.log(data);
  return (
    <>
      { data.length > 0 && <h3>Resultado de la busqueda</h3> }
      <BootstrapTable keyField='_id'
          data={data}
          columns={columns}
          defaultSorted={defaultSorted}
          pagination={pagination}
          striped
          hover
          condensed
      />
    </>
  )
}

export default TableCentralizeData;
