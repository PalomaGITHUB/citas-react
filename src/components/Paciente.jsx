const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  //Para evitar escribir paciente.x, podemos
  const { nombre } = paciente

  //Creamos una funcion que llame a una ventana emergente
  //que pregunte si el paciente seleccionado se quiere eliminar
  const handleEliminar = (id) => {
    const respuesta = confirm("¿Deseas eliminar este paciente?")
    //si la respuesta es positiva
    if(respuesta){
      //se llama a la funcion y se pasa el id
      eliminarPaciente(paciente.id)
    }
  }

  return (

    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Dueño: {''}
        <span className="font-normal normal-case">{paciente.dueno}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de alta: {''}
        <span className="font-normal normal-case">{paciente.alta}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)} //Pasamos el objeto paciente
          >
            Editar
          </button>
          <button
          type="button"
          className="py-2 px-10 bg-red-700 hover:bg-red-900 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
          //Con "handle" hacemos que la funcion no se ejecuta directamente
          //sino que espera a una respuesta para ejecutarse
          //en este caso, se llama a una ventana emergente que confirma que el paciente quiere ser eliminado
          >
            Eliminar
          </button>

        </div>
    </div>
  )
}

export default Paciente