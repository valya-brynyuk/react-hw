import {createSlice} from "@reduxjs/toolkit";
import {generateId} from "../pages/HomePage/components/TodoForm/util/index.js";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, {payload}) => {
      const id = generateId();
      state.todos.push({
        ...payload,
        id,
        completed: false,
      });
    },
    deleteTodo: (state, {payload}) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    deleteAllTodos: (state) => {
      state.todos = [];
    },
    setTodoCompleted: (state, {payload}) => {
      for (const index in Object.keys(state.todos)) {
        if (state.todos[index].id !== payload.id) {
          continue;
        }

        state.todos[index].completed = payload.completed;
      }
    }
  },
  selectors: {
    allTodos: (state) => {
      return state.todos
    },
    todoById: (state, id) => {
      return state.todos.find((todo) => todo.id === id);
    }
  }

})

export const {addTodo, deleteTodo, deleteAllTodos, setTodoCompleted} = todoSlice.actions;
export const {allTodos, todoById} = todoSlice.selectors;

export default todoSlice.reducer;