import classes from "../Components/Styles/TodoList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Redux/CounterSlice";

function TodoList(props) {
  const state = useSelector((state) => state.todoRed);
  const dispatch = useDispatch();

  const deleteHandler = (task, id) => {
    dispatch(removeTodo({ task: task, id: id }));
  };

  return state.tasks.map((todoTask) => (
    <div className={classes.listItem} key={todoTask.id}>
      <input
        type="checkbox"
        className={classes.check}
        onChange={() => deleteHandler(todoTask.task, todoTask.id)}
      />
      <li className={classes.task}>{todoTask.task}</li>
    </div>
  ));
}

export default TodoList;
