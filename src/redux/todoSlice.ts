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
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: String(Date.now()),
        name: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);

      setLocalStorage(state.todos);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        setLocalStorage(state.todos);
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      setLocalStorage(state.todos);
    },
    setTodosFilter: (state, action: PayloadAction<string>) => {
      state.todosFilter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setTodosFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
