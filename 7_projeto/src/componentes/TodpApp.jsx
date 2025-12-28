/* eslint-disable no-unused-vars */
import  {useState} from 'react' 

import './TodoApp.css'

const TodpApp = () => {

// Lista de tarefas inicial

const [todos, setTodos] = useState([]);

// estado de texto da tarefa
const [inputValue, setInputValue] = useState('');

// adiciona nova tarefa

const handleSubmit = (e) => {
    e.preventDefault;
};

  return (

    <div>
        <h1 className="title">Lista de Tarefas</h1>
        {/* Formulário para adicionar novas tarefas */}

        // eslint-disable-next-line no-undef
        <form onSubmit={handleSubmit}></form>

   
            {/* Lista de tarefas */}

            {todos.length === 0 && <p className="empty">Nenhuma tarefa adicionada.</p>}
         
    </div>
  )
}

export default TodpApp


