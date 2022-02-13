import { useState } from "react";
import "./Input.css";

const Input = ({ onTodoAdded }) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onTodoAdded(e.currentTarget.value);
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
