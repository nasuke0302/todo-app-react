import './Summary.css'

const Summary = ({ amount }) => {
  return (
    <div className="summary">
      <p className="amount">{amount} items left</p>

      <button className="clear-btn">Clear Completed</button>
    </div>
  );
};

export default Summary;

