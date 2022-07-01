import react from "react";

export default function TodoItem({
  title,
  status,
  id,
  handleToggle,
  handleDelete
}) {
  return (
    <div
      style={{
        gap: "10px",
        padding: "20px",
        border: "2px solid red",
        display: "flex",
        width: "40%",
        justifyContent: "center"
      }}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <div>{status ? "done" : "not done"}</div>
      <button onClick={() => handleToggle(id)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
