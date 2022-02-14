import { useContext } from "react";
import TodosContext from "../context/TodosContext";
import "./Filters.css";

const Filters = () => {
  const { activeFilter, setActiveFilter } = useContext(TodosContext);

  const handleFilterClick = (active) => {
    setActiveFilter(active);
  };

  return (
    <div className="filters-container">
      <div className="filters">
        <p
          className={`${activeFilter === "all" ? "active" : ""}`}
          onClick={() => handleFilterClick("all")}
        >
          All
        </p>
        <p
          className={`${activeFilter === "active" ? "active" : ""}`}
          onClick={() => handleFilterClick("active")}
        >
          Active
        </p>
        <p
          className={`${activeFilter === "completed" ? "active" : ""}`}
          onClick={() => handleFilterClick("completed")}
        >
          Completed
        </p>
      </div>
    </div>
  );
};

export default Filters;
