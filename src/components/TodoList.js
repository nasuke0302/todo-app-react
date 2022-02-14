import { useContext } from "react";
import TodosContext from "../context/TodosContext";
import TodoItem from "./TodoItem";
import Summary from "./Summary";
import "./TodoList.css";

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {todos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} />;
        })}
        <Summary amount={todos?.length} />
      </ul>
    </div>
  );
};

export default TodoList;
