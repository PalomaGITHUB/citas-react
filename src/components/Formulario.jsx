import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [dueno, setDueno] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);
  //useEffect hace que el console.log se ejecute
  //solo cuando paciente cambie su estado
  useEffect(() => {
    //Object.keys comprueba si un objeto tiene algo
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setDueno(paciente.dueno)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return (fecha + random)
  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    //console.log("Enviando formulario")

    //Validar el fomulario
    if( [nombre, dueno, email, alta, sintomas].includes('') ){
      setError(true);
      return;
    }

    setError(false);

    //Construir objeto paciente
    const objetoPaciente = {
      nombre, dueno, email, alta, sintomas
    }

    if(paciente.id){
      //Editando
      objetoPaciente.id = paciente.id
      //Nueva constate que, al recorrer los pacientes
      //Compara el id del formulario con el de alguno de los registros
      //Si coincide, retorna el objeto paciente
      //Si no, retorna el del State
      const pacientesActualizados = pacientes.map( pacienteState => 
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados);
        setPaciente({});
    }
    else{
      //Nuevo
      objetoPaciente.id = generarId();
      //Toma una copia de pacientes ('metodo inmutable', ...paciente) y le agrega el nuevo objeto
      //Siempre con el metodo setPacientes
      setPacientes([...pacientes, objetoPaciente]);
    }
 

    //Reiniciar el formulario cada vez que se agregue un perrito
    setNombre('')
    setDueno('')
    setEmail('')
    setAlta('')
    setSintomas('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      
      <form htmlFor="mascota" className="bg-white shadow-md rounded-lg py-10 px-5 m-5"
      //Llamo a la funcion handleSubmit definida en la const de arriba
      onSubmit={handleSubmit}>
        {/* Comprobar error */}
        {/* Le pasamos al error un mensaje */}
        { error && <Error mensaje="Rellena todos los campos"/>}
        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
          <input type="text" id="mascota" placeholder="Nombre de la mascota" className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md" 
          //Eventos de react, onChange. Segun el usuario escriba, se irá modificando el valor de nombre con setNombre 
          //Y se modificará al valor que registra el evento
          //El evento es el cambio de letras
          value={nombre} onChange={ (evento) => setNombre(evento.target.value) }/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Nombre dueño</label>
          <input type="text" id="dueño" placeholder="Nombre del dueño" className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md"
          //Igual. Asignamos el value al que hemos creado arriba
          //Y el onChange, haciendo que dueno cambie, con setDueno, a lo que el usuario escriba
          value={dueno} onChange={ (evento) => setDueno(evento.target.value) }/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Email</label>
          <input type="email" id="email" placeholder="Email contacto" className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md"
          value={email} onChange={ (evento) => setEmail(evento.target.value) }/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Alta</label>
          <input type="date" id="alta" className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md"
          value={alta} onChange={ (evento) => setAlta(evento.target.value) }/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-stone-400 rounded-md" placeholder="Describe los sintomas"
          value={sintomas} onChange={ (evento) => setSintomas(evento.target.value) }/>
        </div>

        <input type="submit" className="bg-indigo-600 text-white uppercase font-bold p-3 hover:bg-indigo-700 cursor-pointer transition-all" value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'} />
      </form>
    </div>
  )
}

export default Formulario