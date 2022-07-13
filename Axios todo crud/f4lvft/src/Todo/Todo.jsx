import { useEffect, useState } from "react";
import { getTodos, deleteTodo, addTodo, toggleTodoStatus } from "./api";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
function Todo() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    handleGetTodos();
  }, []);
  function handleGetTodos() {
    setLoading(true);
    setError(false);
    getTodos()
      .then((res) => {
        setData(res.data);
        // console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }
  function handleDelete(id) {
    // setLoading(true);
    deleteTodo(id).then(() => {
      handleGetTodos();
    });
    alert("delele");
  }

  function handleAdd(title) {
    setLoading(true);
    addTodo({
      title,
      status: false
    }).then(() => handleGetTodos());
  }
  function handelToggel({ id, newStatus }) {
    setLoading(true);
    toggleTodoStatus({ id, newStatus }).then(() => handleGetTodos());
  }
  return (
    <div>
      {loading && <div>...loading</div>}
      {error && <div>...error</div>}
      <AddTodo handleAdd={handleAdd} />
      {data.map((item) => (
        <TodoItem
          key={item.id}
          title={item.title}
          id={item.id}
          status={item.status}
          handleDelete={handleDelete}
          handelToggel={handelToggel}
        />
      ))}
    </div>
  );
}

export default Todo;
