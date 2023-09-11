/* Para comprobar el error... 
Al no poder usar if, usamos un ternario 
Si error es true, imprime lo primero si no, lo segundo*/
/* {error ? 'Hay un error': 'Todo correcto'} */
/* Pero para que no aparezca el Todo correcto nada mas empezar,
Usaremos 'si error es true...'*/

//Le paso el mensaje determinado en el formulario
const Error = ({mensaje}) => {
  return (
    <div className="bg-red-600 text-white text-center p-3 uppercase font-bold mb-3 rounded">
        {/* Y lo muestro en un parrafo */}
        <p>{mensaje}</p>
    </div>
  )
}

export default Error