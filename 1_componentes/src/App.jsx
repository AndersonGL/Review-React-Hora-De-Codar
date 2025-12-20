// Componente pai

import { useState, useEffect } from "react";  
import "./App.css";

// importa o componente pai o componente filho

import FunctionalComponent from "./1_componentes/FuncionalComponent";
import ClassComponent from "./1_componentes/ClassComponentes";    
import PropsExample from "./1_componentes/PropsExample";


// importa o componente filho
  

  function App() {
    return (
      <>
        <h1>Hello, World !</h1>

        {/* utiliza o componente importado no JSX */}  
      
        <FunctionalComponent />
        <ClassComponent/>
        <PropsExample nome = " Anderson " idade = {38}/>
      </>
    );
  }


export default App;
