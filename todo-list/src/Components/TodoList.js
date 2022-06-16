import classes from "../Components/Styles/TodoList.module.css";
import Card from "./Card";
function TodoList(props) {
  return props.todoList.map((todoTask) => (
    <div
      className={classes.listItem}
      key={todoTask.id}
      onClick={(e) => {
        console.log(todoTask.id);
        return props.deleteTask(todoTask.id);
      }}
    >
      <input type="checkbox" className={classes.check} />
      <li>{todoTask.task}</li>
    </div>
  ));
}

export default TodoList;
