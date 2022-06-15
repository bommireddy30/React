import { useRef, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import TodoList from "./Components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const inputTodo = useRef();

  const addTodoHandler = () => {
    setTodo([...todo, inputTodo.current.value]);
    inputTodo.current.value = "";
  };
  return (
    <div className="todo--list">
      <Card>
        <input
          type="text"
          className="input"
          placeholder="Enter a task"
          ref={inputTodo}
        />
        <button className="btn" onClick={addTodoHandler}>
          Add-Todo
        </button>
      </Card>
      <div className="todoList">
        <TodoList todoList={todo} />
      </div>
    </div>
  );
}

export default App;
