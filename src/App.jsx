import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello, Anderson  Gouveia Lignelli</h1>
      <p>Contador: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </>
  );
}

export default App;
