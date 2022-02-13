import { useContext } from "react";
import TodosContext from "../context/TodosContext";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
