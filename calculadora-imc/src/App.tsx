import { useState } from 'react'
import './App.css'

function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')
  const [classificacao, setClassificacao] = useState('')

  function calcularIMC() {

    const pesoNumero = parseFloat(peso)
    const alturaNumero = parseFloat(altura)

    if (!pesoNumero || !alturaNumero) {
      setResultado('Digite valores válidos')
      setClassificacao('')
      return
    }

    const imc = pesoNumero / (alturaNumero * alturaNumero)

    setResultado(imc.toFixed(2))

    if (imc < 18.5) {
      setClassificacao('Abaixo do peso')
    } else if (imc < 25) {
      setClassificacao('Peso normal')
    } else if (imc < 30) {
      setClassificacao('Sobrepeso')
    } else {
      setClassificacao('Obesidade')
    }
  }

  return (
    <div className="container">

      <div className="card">

        <h1>Calculadora IMC</h1>

        <input
          type="number"
          placeholder="Digite seu peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <input
          type="number"
          placeholder="Digite sua altura"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>

        <h2>IMC: {resultado}</h2>

        <h3>{classificacao}</h3>

      </div>

    </div>
  )
}

export default App