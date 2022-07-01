import React, { useEffect, useState } from "react";

export default function Todo() {
  const [data, setData] = useState([]);

  const getTodos = async () => {
    try {
      let data = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10"
      );
      data = await data.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <button onClick={getTodos}>Fetch</button>
      <div>
        {data.map((todo) => {
          return (
            <div style={{ display: "flex", gap: "20px" }}>
              <div>{todo.id}</div>
              <div key={todo.id}>{todo.title}</div>
              <div>{todo.status ? "Done" : "Not Done"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
