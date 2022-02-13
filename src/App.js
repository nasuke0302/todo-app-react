import { useState } from "react";
import "./App.css";
import TodosContext from "./context/TodosContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { getTodos, saveTodo } from "./utils";

function App() {
  const [todos, setTodos] = useState(getTodos());

  const handleTodoAdded = (value) => {
    const todo = { value, completed: false };
    saveTodo(todo);
    setTodos([todo, ...todos]);
  };

  return (
    <TodosContext.Provider value={todos}>
      <main id="data-theme" data-theme="light">
        <div className="banner">
          <Header onTodoAdded={handleTodoAdded} />
        </div>
        <div className="body">
          <TodoList todos={todos} />
        </div>
      </main>
    </TodosContext.Provider>
  );
}

export default App;
