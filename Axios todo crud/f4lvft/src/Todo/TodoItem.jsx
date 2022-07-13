function TodoItem({ title, id, status, handleDelete, handleToggle }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "space-between",
        margin: "auto"
      }}
    >
      <div>{id}</div>
      <div>{title}</div>
      <button onClick={() => handleToggle(id, !status)}>
        {status ? " not done" : "done"}
      </button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
}
export default TodoItem;
