import { useState } from "react";
import "./App.css";
import { Header, CreateTodoForm, CardSection } from "./components/index.js";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      text: "리액트 입문 주차 개인 과제 제출",
      isDone: false,
    },
    {
      id: 1,
      title: "JS 공부하기",
      text: "this 공부하기",
      isDone: true,
    },
  ]);

  const onSubmitHandler = (event, todoTitle, todoText) => {
    event.preventDefault();
    if (event.target.title.value && event.target.text.value) {
      const newTodoList = [
        ...todoList,
        {
          id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
          title: todoTitle,
          text: todoText,
          isDone: false,
        },
      ];
      setTodoList(newTodoList);
      event.target.title.value = "";
      event.target.text.value = "";
    } else {
      alert("제목과 내용은 빈칸일 수 없습니다.");
    }
  };

  const todoSwitch = (event) => {
    const eventId = event.target.id;
    const newTodoList = [...todoList];
    newTodoList[eventId].isDone = !newTodoList[eventId].isDone;
    setTodoList(newTodoList);
  };

  const deleteTodo = (event) => {
    const eventId = Number(event.target.id);
    const newTodoList = todoList.filter((todo) => todo.id !== eventId);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <Header />
      <CreateTodoForm handleOnSubmit={onSubmitHandler} />
      <CardSection
        section="work"
        todoList={todoList}
        todoSwitch={todoSwitch}
        deleteTodo={deleteTodo}
      />
      <CardSection
        section="done"
        todoList={todoList}
        todoSwitch={todoSwitch}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
