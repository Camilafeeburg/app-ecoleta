import { useState } from 'react'
import './App.css'

function App() {
  const [altura, setAltura] = useState("")
  const [peso, setPeso] = useState("")

  return (
    <>
      <section id="center">
        <div className="container">

          <h1>Calculadora - React Native & Vite</h1>

          <div className="box"> 

            <p>Altura(cm)</p>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />

            <p>Peso(kg)</p>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />

          </div>

        </div>
      </section>
    </>
  )
}

export default App