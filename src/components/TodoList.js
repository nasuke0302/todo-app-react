import { useContext } from "react";
import TodosContext from "../context/TodosContext";
import TodoItem from "./TodoItem";
import Summary from "./Summary";
import "./TodoList.css";

const TodoList = () => {
  const { filteredTodos, todos, clearCompleted } = useContext(TodosContext);
  const handleClearCompleted = () => {
    clearCompleted();
  };

  return (
    <div className="todo-list-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, i) => {
          return <TodoItem key={i} todo={todo} />;
        })}
        <Summary
          amount={todos?.length}
          onClearCompleted={handleClearCompleted}
        />
      </ul>
    </div>
  );
};

export default TodoList;
