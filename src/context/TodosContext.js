import { createContext } from "react";

const TodosContext = createContext({
  todos: [],
  addTodo: () => {},
  toggleCompleteTodo: () => {},
});

export default TodosContext;
