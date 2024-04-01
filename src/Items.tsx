import React from "react";
import SingleItem from "./SingleItem";
import { useSelector } from "react-redux";

interface IItemsObject {
  name: string;
  completed: boolean;
  id: string;
}

const Items: React.FC = () => {
  const { todos } = useSelector((state: { todos: any }) => state.todos);
  console.log(todos);

  return (
    <div className="items">
      {todos.map((item: IItemsObject) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
