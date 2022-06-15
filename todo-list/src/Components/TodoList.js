import classes from "../Components/Styles/TodoList.module.css";
import Card from "./Card";
function TodoList(props) {
  return props.todoList.map((task) => (
    <div className={classes.listItem}>
      <input type="checkbox" className={classes.check} />
      <li>{task}</li>
    </div>
  ));
}

export default TodoList;
