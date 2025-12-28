/* eslint-disable no-unused-vars */
import  {useState} from 'react' 

import './TodoApp.css'

const TodpApp = () => {

// Lista de tarefas inicial

const [todos, setTodos] = useState([]);



  return (

    <div>
        <h1 className="title">Lista de Tarefas</h1>
        {/* Formulário para adicionar novas tarefas */}
        
   
            {/* Lista de tarefas */}

            {todos.length === 0 && <p className="empty">Nenhuma tarefa adicionada.</p>}
         
    </div>
  )
}

export default TodpApp
