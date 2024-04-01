import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utils/getSetLocalStorage";

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  todosFilter: string;
}

const initialState: TodosState = {
  todos: getLocalStorage(),
  todosFilter: "all",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // addTodo functions helps in adding new todo item
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: String(Date.now()),
        name: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);

      // we are updating todos list value in local storage after every changes
      setLocalStorage(state.todos);
    },

    // toggleTodo functions helps in selecting checkbox value
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        setLocalStorage(state.todos);
      }
    },

    // removeTodo functions helps in removing the todo item
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setLocalStorage(state.todos);
    },

    // setTodosFilter functions helps in selecting the todosFilter value
    setTodosFilter: (state, action: PayloadAction<string>) => {
      state.todosFilter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setTodosFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
