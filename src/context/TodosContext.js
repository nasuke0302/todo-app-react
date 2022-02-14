import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  filteredTodos: [],
  addTodo: () => {},
  toggleCompleteTodo: () => {},
  activeFilter: "all",
  setActiveFilter: () => {},
  clearCompleted: () => {},
});

export default TodosContext;
