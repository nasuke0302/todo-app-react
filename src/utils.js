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

export const saveTodo = (t) => {
  if (!t) return;

  let todos = getTodos();

  const exists = todos.findIndex((todo) => todo.value === t.value);
  if (exists !== -1) {
    todos = todos.map((todo) => {
      if (todo.value === t.value) {
        todo = t;
      }
      return todo;
    });
  } else {
    todos.push(t);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  return todos;
};

export const clearCompletedTodos = () => {
  const todos = getTodos();
  const activeOnly = todos.filter((t) => !t.completed);
  localStorage.setItem("todos", JSON.stringify(activeOnly));
  return activeOnly;
};
