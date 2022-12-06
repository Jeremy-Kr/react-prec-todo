import { Todo } from "./index";

function CardSection({ todoList, section, todoSwitch, deleteTodo }) {
  if (section === "work") {
    return (
      <section>
        <p className="todo-title"> 🔥 Working! 🔥 </p>
        <div className="todo-container">
          {todoList.map((todo) => {
            if (!todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  text={todo.text}
                  isDone={todo.isDone}
                  todoSwitch={todoSwitch}
                  deleteTodo={deleteTodo}
                />
              );
            } else return null;
          })}
        </div>
      </section>
    );
  } else if (section === "done") {
    return (
      <section>
        <p className="todo-title"> 🎊 It's Done! 🎊 </p>
        <div className="todo-container">
          {todoList.map((todo) => {
            if (todo.isDone) {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  text={todo.text}
                  isDone={todo.isDone}
                  todoSwitch={todoSwitch}
                  deleteTodo={deleteTodo}
                />
              );
            } else return null;
          })}
        </div>
      </section>
    );
  }
}

export default CardSection;
