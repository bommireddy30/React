import { useRef, useState } from "react";
import { addTodo } from "../src/Redux/CounterSlice";
import { useDispatch } from "react-redux";
import "./App.css";
import Card from "./Components/Card";
import TodoList from "./Components/TodoList";

function App() {
  const [key, setKey] = useState(0);
  const inputTodo = useRef();
  const dispatch = useDispatch();

  const addTodoHandler = () => {
    setKey((key) => key + 1);
    dispatch(addTodo({ task: inputTodo.current.value, id: key }));
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
        <TodoList />
      </div>
    </div>
  );
}

export default App;
