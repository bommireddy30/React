import { useRef, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import TodoList from "./Components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [key, setKey] = useState(0);
  const inputTodo = useRef();

  const addTodoHandler = () => {
    setKey((key) => key + 1);
    setTodo([...todo, { task: inputTodo.current.value, id: key }]);
    inputTodo.current.value = "";
  };

  const deleteHandler = (key) => {
    return setTodo((prevState) => prevState.filter((task) => task.id !== key));
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
        <TodoList todoList={todo} key={todo} deleteTask={deleteHandler} />
      </div>
    </div>
  );
}

export default App;
