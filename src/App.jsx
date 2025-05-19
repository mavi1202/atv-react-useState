import { useState } from "react"

export function App(){


  const [esconder, setEsconder] = useState(false)

 const [numero, setNumero] = useState(100)

   function handleAumentar(){
    setNumero(numero + 100)
    console.log(numero)
   }



   function handleMostrarEsconder(){
      esconder === true ? setEsconder(false) : setEsconder(true);

   }

   return (
    <section>
      <h1>App</h1>



      <div>
      <h2> Número: {numero}</h2>

      <button onClick ={handleAumentar}> Aumentar</button>
      <br />

    <button onClick={handleMostrarEsconder}> {esconder === true ? "Esconder Texto" : "Mostrar Texto"} </button>
    {esconder === true ? <p>Mostrar Texto</p> : ""}

      </div>
      
    </section>


   )


}