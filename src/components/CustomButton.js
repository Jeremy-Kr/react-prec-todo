function CustomButton(props) {
  if (props.isDone === undefined) {
    return <button className="button">{props.children}</button>;
  }

  return (
    <button className="button" onClick={props.todoSwitch} id={props.id}>
      {props.isDone ? "취소" : "완료"}
    </button>
  );
}

export default CustomButton;
