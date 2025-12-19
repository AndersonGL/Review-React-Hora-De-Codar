import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World React</h1>
      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </>
  );
}

export default App;
