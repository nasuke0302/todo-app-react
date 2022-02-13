import "./App.css";

function App() {
  const handleClick = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const theme = savedTheme === "light" ? "dark" : "light";

    const el = document.getElementById("data-theme");
    el.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <main id="data-theme" data-theme="light">
      <button onClick={handleClick}>Change Theme</button>
    </main>
  );
}

export default App;
