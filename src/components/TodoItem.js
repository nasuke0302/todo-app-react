const TodoItem = ({ todo }) => {
  return (
    <li>
      <p>{todo.value}</p>
    </li>
  );
};

export default TodoItem;
