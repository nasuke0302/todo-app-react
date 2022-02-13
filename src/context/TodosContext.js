import { createContext } from "react";

const savedTodos = localStorage.getItem("todos") || "[]";
const parsedTodos = JSON.parse(savedTodos);

const TodosContext = createContext({parsedTodos});

export default TodosContext;
