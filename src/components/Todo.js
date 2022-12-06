import { CustomButton } from "./index";

function Todo(props) {
  const { title, text, isDone, id, todoSwitch, deleteTodo } = props;
  return (
    <div className="todo-card">
      <h4>{title}</h4>
      <p>{text}</p>
      <CustomButton id={id} isDone={isDone} todoSwitch={todoSwitch} />
      <button onClick={deleteTodo} className="delete-button button" id={id}>
        삭제하기
      </button>
    </div>
  );
}

export default Todo;
