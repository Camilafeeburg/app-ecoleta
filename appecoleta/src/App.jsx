import { useState } from 'react'

import './App.css'

function App() {

  const [tela, setTela] = useState('0');

  const adicionarNumero = (valor) => {

    if (tela === '0') {

      setTela(valor);

    } else {

      setTela(tela + valor);
    }
  };

  const limparTela = () => {

    setTela('0');
  };

  const calcularConta = () => {

    try {

      const resultado = String(eval(tela));

      setTela(resultado);

    } catch {

      setTela('Erro');
    }
  };

  return (

    <div className='calculadora'>

      <h1>Calculadora</h1>

      <div className="tela">

        <div className="current">
          {tela}
        </div>

      </div>

      <div className="botoes">

        <button
          onClick={limparTela}
          className="span-two"
        >
          AC
        </button>

        <button onClick={() => adicionarNumero('/')}>
          ÷
        </button>

        <button onClick={() => adicionarNumero('*')}>
          ×
        </button>

        <button onClick={() => adicionarNumero('7')}>
          7
        </button>

        <button onClick={() => adicionarNumero('8')}>
          8
        </button>

        <button onClick={() => adicionarNumero('9')}>
          9
        </button>

        <button onClick={() => adicionarNumero('-')}>
          -
        </button>

        <button onClick={() => adicionarNumero('4')}>
          4
        </button>

        <button onClick={() => adicionarNumero('5')}>
          5
        </button>

        <button onClick={() => adicionarNumero('6')}>
          6
        </button>

        <button onClick={() => adicionarNumero('+')}>
          +
        </button>

        <button onClick={() => adicionarNumero('1')}>
          1
        </button>

        <button onClick={() => adicionarNumero('2')}>
          2
        </button>

        <button onClick={() => adicionarNumero('3')}>
          3
        </button>

        <button
          onClick={calcularConta}
          className="igual"
        >
          =
        </button>

        <button
          onClick={() => adicionarNumero('0')}
          className="span-two"
        >
          0
        </button>

        <button onClick={() => adicionarNumero('.')}>
          .
        </button>

      </div>

    </div>
  );
}

export default App