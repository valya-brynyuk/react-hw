import {useEffect} from 'react';
import {Col, Container, Form, Row} from "react-bootstrap";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setTodoCompleted, todoById} from "../../store/todoSlice.js";

export const TodosPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const todoItem = useSelector((state) => todoById(state, params.id))
  const navigate = useNavigate()

  useEffect(() => {
    if (!todoItem) {
      navigate("/404")
    }
  }, [todoItem]);

  const checkStateChangeHandler = (event) => {
    dispatch(setTodoCompleted({
      id: todoItem.id,
      completed: event.target.checked
    }))
  }

  if (!todoItem) {
    return null;
  }

  return (
    <BaseTemplate title={todoItem.title}>
      <Container>
        <Row>
          <Col md={12}>
            <p>{todoItem.body}</p>
            <hr/>
            <Form.Check // prettier-ignore
              type="switch"
              label="Completed"
              checked={todoItem.completed}
              onChange={checkStateChangeHandler}
            />
            <hr/>
            <Link to={'/'} className="btn btn-link">Home Page</Link>
          </Col>
        </Row>
      </Container>
    </BaseTemplate>
  );
};

