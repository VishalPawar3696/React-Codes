import react from "react";
import TodoItem from "./TodoItem";
export default function TodoList({ data, handleToggle,handleDelete }) {
  return (
    <>
      <h3>TodoList</h3>
      {data.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          handleToggle={handleToggle}
          handleDelete={handleDelete}

        />
      ))}
      
    </>
  );
}
