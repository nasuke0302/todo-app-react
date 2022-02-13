import { useTheme } from "../utils";
import Input from "./Input";
import iconSun from "../images/icon-sun.svg";
import iconMoon from "../images/icon-moon.svg";

import "./Header.css";

const Banner = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div className="header">
      <div className="container">
        <h1>TODO</h1>
        <button onClick={setTheme}>
          <img src={theme === "dark" ? iconSun : iconMoon} alt="theme toggle" />
        </button>
        <Input />
      </div>
    </div>
  );
};

export default Banner;
