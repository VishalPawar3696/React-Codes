import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import User from "./User";
import UserPage from "./UserPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/users" element={<User />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users/:user_id" element={<UserPage />} />
    </Routes>
  );
}
