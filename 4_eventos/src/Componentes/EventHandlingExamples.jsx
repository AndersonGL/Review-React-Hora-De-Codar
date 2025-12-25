import React, { useState } from 'react';

const EventHandlingExamples = () => {
  const [name, setName] = useState("");

  const handleClick = () => {
    alert("Olá, você clicou no botão!");
  };

  const handleGreet = (name) => {
    alert(`Olá, ${name}!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`enviado ${name}`);
    setName(""); // limpar o campo após o envio
  };

  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>

      <br /><br />

      <button onClick={() => handleGreet("Ana")}>Dizer Olá Ana</button>
      <button onClick={() => handleGreet("Pedro")}>Dizer Olá Pedro</button>

      <br /><br />

      <form onSubmit={handleSubmit}>
        <input  type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandlingExamples;


