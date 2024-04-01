import React from "react";
import { removeTodo, toggleTodo } from "./redux/todoSlice";
import { useDispatch } from "react-redux";

interface IItemObject {
  name: string;
  completed: boolean;
  id: string;
}

interface IItemProps {
  item: IItemObject;
}

const SingleItem: React.FC<IItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => dispatch(toggleTodo(item.id))}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : undefined,
          minWidth: "100%",
          whiteSpace: "normal",
          overflowWrap: "break-word",
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => dispatch(removeTodo(item.id))}
        style={{
          backgroundColor: item.completed ? "green" : "black",
        }}
      >
        {item.completed ? "Completed" : "Delete"}
      </button>
    </div>
  );
};

export default SingleItem;
