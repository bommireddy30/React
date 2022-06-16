import classes from "../Components/Styles/TodoList.module.css";
import Card from "./Card";
function TodoList(props) {
  return props.todoList.map((todoTask) => (
    <div className={classes.listItem} key={todoTask.id}>
      <input
        type="checkbox"
        className={classes.check}
        onChange={(e) => {
          props.deleteTask(todoTask.id);
        }}
      />
      <li>{todoTask.task}</li>
    </div>
  ));
}

export default TodoList;
