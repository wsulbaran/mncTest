
import { useForm } from "react-hook-form";

const InputSearch = ({onSubmit}) => {
  const {register, errors, handleSubmit} = useForm();
  //const onSubmit = (data) =>  setSearch(data)

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-sm">
            <div className="form-group">
              <input
                ref={register({ required: true })}
                type="text"
                name="search"
                placeholder="Buscar"
                className="form-control"
                id="text" />
              {errors.search &&
                <p className="text-danger" >Por favor llenar el campo de busqueda.</p>
              }

            </div>
          </div>
          <div className="col-sm">
            <button
            type="submit"
            className="btn btn-main bg-blue py-2 ttu">Buscar</button>
          </div>
        </div>
      </form>
    </>
  )

}

export default InputSearch
