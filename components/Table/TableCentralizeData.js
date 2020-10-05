
import axios from 'axios';
import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';




const TableCentralizeData = ({search}) => {
  const [data, setData] = useState([]);
  const images = (row, cell) => {
    return <img className="photo" src={cell.img}/>
  }
  const imagesOri = (row, cell) => {
    return <img className="photo" src={cell.origin} alt="Origen"/>
  }
  const link = (row, cell) => {
  return (<a href={cell.link}  target="_blank">{cell.link}</a>)
  }
  const columns =  [
      { dataField: '_id', text: 'ID', hidden:true },
      { dataField: 'origin', text: 'Fuente', formatter:imagesOri},
      { dataField: 'name', text: 'Título', sort: true , style:{ whiteSpace: 'normal', wordWrap: 'break-word' }},
      { dataField: 'type', text: 'Categoría', sort: true ,style:{ whiteSpace: 'normal', wordWrap: 'break-word' }},
      { dataField: 'link', text: 'Página', style:{ whiteSpace: 'normal', wordWrap: 'break-word' }, formatter:link},
      { dataField: 'img', text: 'Imagen', formatter:images , }
  ];
  const defaultSorted = [{
    dataField: 'name',
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
  return (
    <>
      { data.length > 0 && <h3>Resultado de la búsqueda</h3> }
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
