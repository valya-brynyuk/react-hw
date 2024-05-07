import TodoItem from "./components/TodoItem";
import style from './TodoList.module.css';

export const TodoList = ({todos}) => {
  return (
    <div className={style.wrapper}>
      {
        todos.map(
          (item) => <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
            completed={item.completed}
          />
        )
      }
    </div>
  );
};
