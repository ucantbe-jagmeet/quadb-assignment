import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";
import { toast } from "react-toastify";

const Form: React.FC = () => {
  const [newItemName, setNewItemName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (!newItemName) return;
    dispatch(addTodo(newItemName));
    setNewItemName("");
    toast.success("🦄 Item Added to the List!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    if (!newItemName) return;
    dispatch(addTodo(newItemName));
    setNewItemName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>To Do app</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="button" className="btn" onClick={handleClick}>
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
