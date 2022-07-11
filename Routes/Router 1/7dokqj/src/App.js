import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./COmponents/Navbar";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
