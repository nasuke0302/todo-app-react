import { useMemo, useState } from "react";
import "./App.css";
import TodosContext from "./context/TodosContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { getTodos, saveTodo } from "./utils";

function App() {
  const [todos, setTodos] = useState(getTodos());

  const addTodo = (newTodo) => {
    const todo = { value: newTodo, completed: false };
    const updatedTodos = saveTodo(todo);
    setTodos(updatedTodos);
  };

  const toggleCompleteTodo = (t) => {
    let todo = todos.find((tod) => tod.value === t.value);
    if (todo) {
      todo.completed = !todo.completed;
      const updatedTodos = saveTodo(todo);
      setTodos(updatedTodos);
    }
    return;
  };

  const value = useMemo(
    () => ({ todos, addTodo, toggleCompleteTodo }),
    [todos]
  );

  return (
    <TodosContext.Provider value={value}>
      <main id="data-theme" data-theme="light">
        <div className="banner">
          <Header />
        </div>
        <div className="body">
          <TodoList />
        </div>
      </main>
    </TodosContext.Provider>
  );
}

export default App;
