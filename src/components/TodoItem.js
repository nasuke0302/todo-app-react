import "./TodoItem.css";
import iconCross from "../images/icon-cross.svg";
import iconCheck from "../images/icon-check.svg";
import { useContext } from "react";
import TodosContext from "../context/TodosContext";

const TodoItem = ({ todo }) => {
  const { toggleCompleteTodo } = useContext(TodosContext);

  const onTodoComplete = () => {
    toggleCompleteTodo(todo);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-item-container">
        <div className="icon-container">
          <img src={iconCheck} alt="check icon" />
        </div>
        <p>{todo.value}</p>
        <button onClick={onTodoComplete}>
          <img src={iconCross} alt="complete button" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
