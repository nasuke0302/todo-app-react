import { useEffect, useMemo, useState } from "react";
import "./App.css";
import TodosContext from "./context/TodosContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import { clearCompletedTodos, getTodos, saveTodo } from "./utils";

function App() {
  const [todos, setTodos] = useState(getTodos());
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    switch (activeFilter) {
      case "active":
        setFilteredTodos(todos.filter((t) => !t.completed));
        break;
      case "completed":
        setFilteredTodos(todos.filter((t) => t.completed));
        break;
      case "all":
      default:
        setFilteredTodos(todos);
        break;
    }
  }, [activeFilter]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

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

  const clearCompleted = () => {
    const activeOnly = clearCompletedTodos();
    setTodos(activeOnly);
  };

  const value = useMemo(
    () => ({
      todos,
      filteredTodos,
      addTodo,
      toggleCompleteTodo,
      activeFilter,
      setActiveFilter,
      clearCompleted,
    }),
    [todos, activeFilter, filteredTodos, setActiveFilter]
  );

  return (
    <TodosContext.Provider value={value}>
      <main id="data-theme" data-theme="light">
        <div className="banner">
          <Header />
        </div>
        <div className="relative-body">
          <div className="body">
            <TodoList />
            <Filters />
          </div>
        </div>
      </main>
    </TodosContext.Provider>
  );
}

export default App;
