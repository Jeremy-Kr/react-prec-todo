import { useState } from "react";
import "./App.css";
import {
  Header,
  CreateTodoForm,
  Todo,
  CardSection,
} from "./components/index.js";

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

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodoList = [
      ...todoList,
      {
        id: todoList.length === 0 ? 0 : todoList[todoList.length - 1].id + 1,
        title: event.target.title.value,
        text: event.target.text.value,
        isDone: false,
      },
    ];
    setTodoList(newTodoList);
    event.target.title.value = "";
    event.target.text.value = "";
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
