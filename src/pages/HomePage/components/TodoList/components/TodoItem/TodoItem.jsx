import {Button, Card, Form} from "react-bootstrap";
import style from "./TodoItem.module.css";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTodo, setTodoCompleted} from "../../../../../../store/todoSlice.js";
import {addToast} from "../../../../../../store/toastSlice.js";

export const TodoItem = ({title, body, id, completed}) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    if (confirm("Are you sure you want to remove this item?")) {
      dispatch(deleteTodo(id));

      dispatch(addToast({
        type: 'success',
        body: 'Item was deleted successfully'
      }))
    }
  }

  const checkStateChangeHandler = (event) => {
    dispatch(setTodoCompleted({
      id,
      completed: event.target.checked
    }))
  }

  return (
    <Card
      className={style.wrapper}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <hr/>
        <Form.Check // prettier-ignore
          type="switch"
          label="Completed"
          checked={completed}
          onChange={checkStateChangeHandler}
        />
      </Card.Body>
      <Card.Footer className={style.actions}>
        <Button
          type='button'
          variant="danger"
          onClick={handleRemove}
        >Delete</Button>
        <Link className='btn-info btn' to={`/todo/${id}`}>Show</Link>
      </Card.Footer>
    </Card>
  );
};
