import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import Header from "./components/header"
import { useState, useEffect } from "react"

function App() {

  const [pacientes, setPacientes] = useState([]);
  //Genero la funcion paciente
  const [paciente, setPaciente] = useState({});

  //Crear datos persistentes, importante el orde
  //primero comprobamos si hay algo almancenado
  useEffect(() => {
    const obtenerLS = () => {
      //si no hubiera algo, lo crearia []
      //con parse lo ahcemos arreglo
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, []);

  //comprobamos si ha habido cambios con useEffect
  //cada vez que haya un cambio en paciente, ejecutamos lo siguiente
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  }, [pacientes])

  //Funcion para borrar pacientes
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
        //Paso al Fomulario los pacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          
        />
        <ListadoPacientes
          pacientes={pacientes}
          //Paso la funcion paciente al componente
          setPaciente={setPaciente}
          //Paso la funcion de eliminar paciente
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
