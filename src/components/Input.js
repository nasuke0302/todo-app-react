import { useContext } from "react";
import { useState } from "react";
import TodosContext from "../context/TodosContext";
import "./Input.css";

const Input = () => {
  const [value, setValue] = useState("");
  const { addTodo } = useContext(TodosContext);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      addTodo(e.currentTarget.value);
      setValue("");
    }
  };

  return (
    <div className="input">
      <input
        placeholder="Create a new todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
