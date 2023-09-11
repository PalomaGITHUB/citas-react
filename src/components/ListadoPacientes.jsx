import Paciente from "./Paciente"
//import { useEffect } from "react"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  // Cuando se añada un nuevo paciente, mensaje 
  // useEffect(() => {
  //   if(pacientes.length > 0){
  //     console.log("Nuevo paciente");
  //   }
  // }, [pacientes])
  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
        {/* Si el array tiene pacientes */}
        { pacientes && pacientes.length ? 
        
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mb-10 mt-5 text-center">Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y citas</span>
          </p>

          {/* Recorremos el array de paciente con nombre.map*/}
          {/* paciente es una variable temporal */}
          { pacientes.map( paciente => {
            return(
              //con paciente.nombre acceedo al nombre
              //Acceder al array de pacientes
              //Genera un componente por cada elemento dentro del array
              <Paciente           
                //Le pasamos como key, el id creado como random
                key = {paciente.id}
                //prop + objeto
                paciente = { paciente }
                setPaciente={ setPaciente }
                eliminarPaciente = { eliminarPaciente }

              />
              
            )
          })} 
        </>
        //Si el array está vacio
        : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mb-10 mt-5 text-center">Agregas tus {''}
              <span className="text-indigo-600 font-bold">pacientes</span>
            </p>
          </>
        )}
     
    </div>
  )
}

export default ListadoPacientes