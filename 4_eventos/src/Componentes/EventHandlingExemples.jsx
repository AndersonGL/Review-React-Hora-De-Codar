import React from 'react'

const handleClick = () => {
  alert("Olá, você clicou no botão!")
}

const EventHandlingExemples = () => {
  return (
    <div>
      <button onClick={() => alert("oi")}>Clique aqui</button>
      <button onClick={handleClick}>Clique aqui 2</button>
      <br />
      
    </div>
  )
}

export default EventHandlingExemples

