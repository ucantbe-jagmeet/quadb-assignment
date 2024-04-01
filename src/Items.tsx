import React, { useState } from "react";
import SingleItem from "./SingleItem";
import { useDispatch, useSelector } from "react-redux";
import { setTodosFilter } from "./redux/todoSlice";

interface IItemsObject {
  name: string;
  completed: boolean;
  id: string;
}

const Items: React.FC = () => {
  const { todos, todosFilter } = useSelector(
    (state: { todos: any }) => state.todos
  );
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo: IItemsObject) => {
    if (todosFilter === "completed") return todo.completed;
    if (todosFilter === "non-completed") return !todo.completed;
    return true;
  });

  return (
    <div>
      <div>
        Sort By -
        <select
          value={todosFilter}
          onChange={(e) => dispatch(setTodosFilter(e.target.value))}
          className="dropdown-items"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="non-completed">Non-Completed</option>
        </select>
      </div>

      {filteredTodos.map((item: IItemsObject) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
