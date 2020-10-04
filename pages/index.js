import { useState } from 'react';

import TableCentralizeData from '@/components/Table/TableCentralizeData'
import InputSearch from '@/components/Input/InputSearch'

const Home = () => {
  const [search, setSearch] = useState({});
  const validateObj = Object.keys(search).length === 0 && search.constructor === Object;
  const validateObjValue = (search.search)? ((search.search.length > 0)? true:false):false
  return(
    <div className="mnc-app">

      <div className="bwm-form mt-5">

        <div className="row">

          <div className="col-md-5 mx-auto">
            <div className="px-2">
              <div className="pt-5 pb-4">
                <h3>Busqueda Centralizada de datos</h3>
              </div>
            </div>
            <InputSearch  onSubmit={(data) => setSearch(data)} />
            <>
              {!validateObj && validateObjValue && <TableCentralizeData search={search}/>}
            </>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
