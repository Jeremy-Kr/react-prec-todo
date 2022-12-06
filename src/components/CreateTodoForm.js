import { CustomButton } from "./index";
function CreateTodoForm(props) {
  return (
    <form
      className="todo-input-form"
      onSubmit={(event) => {
        props.handleOnSubmit(event);
      }}
    >
      <div>
        <label htmlFor="title">제목</label>
        <input type="text" id="title" className="todo-input" />
        <label htmlFor="text">내용</label>
        <input type="text" id="text" className="todo-input" />
      </div>
      <CustomButton>추가하기</CustomButton>
    </form>
  );
}

export default CreateTodoForm;
