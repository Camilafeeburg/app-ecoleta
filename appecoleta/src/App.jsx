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
          <div className="box">

            <h1>Calculadora IMC</h1>

            <p>Altura(m)</p>

            <input
              type="number"
              value={altura}
              placeholder='Ex: 1.67'
              onChange={(e) => setAltura(e.target.value)}
            />

            <p>Peso(kg)</p>

            <input
              type="number"
              value={peso}
              placeholder='Ex: 60'
              onChange={(e) => setPeso(e.target.value)}
            />

            <button onClick={calcularIMC}>
              Calcular
            </button>

            <p>Seu resultado é: {imc}</p>

          </div>


          <div className="tabela">

            <h2>Entenda seu resultado</h2>

            <table>
              <thead>
                <tr>
                  <th>IMC</th>
                  <th>Classificação</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Menor que 18,5</td>

                  <td className="classificacao">
                    Abaixo do peso

                    <div className="bolinha azul"></div>
                  </td>
                </tr>

                <tr>
                  <td>18,5 – 24,9</td>

                  <td className="classificacao">
                    Peso normal

                    <div className="bolinha verde"></div>
                  </td>
                </tr>

                <tr>
                  <td>25,0 – 29,9</td>

                  <td className="classificacao">
                    Sobrepeso

                    <div className="bolinha amarela"></div>
                  </td>
                </tr>

                <tr>
                  <td>30,0 – 34,9</td>

                  <td className="classificacao">
                    Obesidade grau I

                    <div className="bolinha laranja"></div>
                  </td>
                </tr>

                <tr>
                  <td>35,0 – 39,9</td>

                  <td className="classificacao">
                    Obesidade grau II

                    <div className="bolinha vermelha"></div>
                  </td>
                </tr>

                <tr>
                  <td>Maior ou igual a 40</td>

                  <td className="classificacao">
                    Obesidade grau III

                    <div className="bolinha vinho"></div>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>
    </>
  )
}

export default App