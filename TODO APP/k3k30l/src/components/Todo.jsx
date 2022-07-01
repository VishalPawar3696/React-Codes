import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState([]);
  function handleAdd(text) {
    setTodo([
      ...todo,
      {
        id: todo.length + Date.now(),
        title: text,
        status: false
      }
    ]);
  }

  const handleToggle = (id) => {
    const update = todo.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status
          }
        : item
    );
    setTodo(update);
  };

  const handleDelete = (id) => {
    const update = todo.filter((item) => item.id !== id);
    setTodo(update);
  };
  return (
    <>
      <AddTodo handleAdd={handleAdd} />

      <TodoList
        data={todo.filter((item) => !item.status)}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />

      <h2>Completed</h2>
      <TodoList
        data={todo.filter((item) => item.status)}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    </>
  );
}
