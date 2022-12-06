import { CustomButton } from "./index";
import { useState } from "react";
function CreateTodoForm(props) {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodoText] = useState("");

  const handleOnChange = (event) => {
    if (event.target.id === "title") {
      setTodoTitle(event.target.value);
    } else if (event.target.id === "text") {
      setTodoText(event.target.value);
    }
  };

  return (
    <form
      className="todo-input-form"
      onSubmit={(event) => {
        props.handleOnSubmit(event, todoTitle, todoText);
      }}
    >
      <div>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          className="todo-input"
          onChange={handleOnChange}
        />
        <label htmlFor="text">내용</label>
        <input
          type="text"
          id="text"
          className="todo-input"
          onChange={handleOnChange}
        />
      </div>
      <CustomButton>추가하기</CustomButton>
    </form>
  );
}

export default CreateTodoForm;
