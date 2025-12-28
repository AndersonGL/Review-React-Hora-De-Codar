import { useState, useEffect } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // carregar do localStorage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // salvar no localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTodos((prev) => [...prev, newTodo]);
      setInputValue("");
    }
  };

  // deletar item
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Adicione uma nova tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button">Adicionar</button>
      </form>

      {todos.length === 0 && (
        <p className="empty">Não há tarefas</p>
      )}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
