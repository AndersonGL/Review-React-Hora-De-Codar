import { useState, useEffect } from 'react';

const UseEffectExamples = () => {

  // useEffect sem dependências explícitas (roda em toda renderização)
  useEffect(() => {
    console.log('Rodou o useEffect');
  });

  // com dependência vazia / array dep.vazio
useEffect(() => {
    console.log('Rodou o useEffect apenas na montagem do componente');
  }, []);



// useState atica a re-renderização do componente
   const [count, setCount] = useState(0);


  // com dependência específica

  useEffect(() => {
    console.log('Rodou o useEffect apenas quando a contagem mudou');
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Aumentar contagem
      </button>
    </div>
  );
};

export default UseEffectExamples;