import "./Summary.css";

const Summary = ({ amount, onClearCompleted }) => {
  return (
    <div className="summary">
      <p className="amount">{amount} items left</p>

      <button className="clear-btn" onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

export default Summary;
