import { useState } from "react";

export const useTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    const el = document.getElementById("data-theme");
    el.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return [theme, toggleTheme];
};

export const getTodos = () => {
  const todos = localStorage.getItem("todos") || [];
  if (todos && todos?.length) {
    return JSON.parse(todos);
  }
  return [];
};

export const saveTodo = (value) => {
  if (!value) return;
  const todos = getTodos();

  const exists = todos.find((todo) => todo.value === value);
  if (exists) return;
  todos.push({ value, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));
};
