import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateComponent from './componentes/UseStateComponentes'

function App() {

  let count = 0; 

  const increment = () => {

    count += 1;

    console.log(count);

  }

  

  return (

      <div>
        <h2>Contador</h2>
        <p>Você Clicou {count} vezes</p>
        <button onClick={}>Incrementar</button>
      </div>
  );
}

export default App;
