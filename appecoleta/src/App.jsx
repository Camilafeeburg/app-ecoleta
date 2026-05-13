import { useState } from 'react'
import './App.css'

function App() {

  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")
  const [imc, setImc] = useState("")

  function calcularIMC() {
   const resultado = peso / (altura * altura)
    setImc(resultado.toFixed(2))
  }

  return (
    <>
      <section id="center">

    <div className="container">

    <h1>Calculadora IMC</h1>

     <div className="box">

     <p>Altura(m)</p>

     <input
       type="number"
        value={altura}
        placeholder='Ex: 1,67'
        onChange={(e) => setAltura(e.target.value)}
            />

         <p>Peso(kg)</p>

           <input
          type="number"
          value={peso}
          placeholder='Ex:60'
           onChange={(e) => setPeso(e.target.value)}
         />

        <button onClick={calcularIMC}>
           Calcular
         </button>

         <p> Seu resultado é: {imc}</p>

          </div>

        </div>
      <div className="tabela">
         
      </div>
      </section>
    </>
  )
}

export default App