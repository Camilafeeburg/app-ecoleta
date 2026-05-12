import { useState } from 'react'

import './App.css'


function App() {
    const [tela, setDisplay] = useState('0');
    const [equation, setEquation] = useState('');
  
    const handleClick = (value) => {
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(tela + value);
      }
    };
  
    const clear = () => {
      setDisplay('0');
      setEquation('');
    };
  
    const calculate = () => {
      try {
      
        const result = eval(tela).toString();
        setEquation(tela + ' =');
        setDisplay(result);
      } catch (error) {
        setDisplay('Erro');
      }
    };

  return ( <div className='calculadora'> Calculadora
     
     <div className="tela">
          <small>{equation}</small>
          <div className="current">{tela}</div>
        </div>

        <div className="botoes">
          <button onClick={clear} className="span-two">AC</button>
          <button onClick={() => handleClick('/')}>÷</button>
          <button onClick={() => handleClick('*')}>×</button>
          
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('-')}>-</button>
          
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('+')}>+</button>
          
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={calculate} className="igual">=</button>
          
          <button onClick={() => handleClick('0')} className="span-two">0</button>
          <button onClick={() => handleClick('.')}>.</button>
        </div>
  </div>
    
      

      
    
  )}

export default App
