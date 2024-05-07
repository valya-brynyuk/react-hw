import {useEffect, useState} from 'react';
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import {Col, Container, Row} from "react-bootstrap";
import TodoForm from "./components/TodoForm/index.js";
import TodoList from "./components/TodoList/index.js";
import {addTodo, allTodos} from "../../store/todoSlice.js";
import {useDispatch, useSelector} from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector(allTodos)
  const addTodoItem = (todoItem) => {
    dispatch(addTodo(todoItem))
  }


  return (
    <BaseTemplate title='Home Page'>
      <Container>
        <Row>
          <Col md={4}>
            <TodoForm saveDataHandler={addTodoItem} />
          </Col>
          <Col md={8}>
            {todoItems.length ?
              <TodoList todos={todoItems}/> :
              <h3 className='py-4 border text-center'>No Items Added</h3>
            }
          </Col>
        </Row>
      </Container>
    </BaseTemplate>
  );
};

