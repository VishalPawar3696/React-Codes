import "./styles.css";
import { getTodos } from "./Todo/api";
import Todo from "./Todo/Todo";
export default function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}
