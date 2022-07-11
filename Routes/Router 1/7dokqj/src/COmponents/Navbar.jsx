import { Link, NavLink } from "react-router-dom";
const links = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/about",
    title: "About"
  },
  {
    to: "/users",
    title: "users"
  },
  {
    to: "/contact",
    title: "Contact"
  }
];

const baseColor = {
  color: "black"
};

export default function Navbar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      {/* <h1>Navbar</h1> */}
      {links.map((item) => (
        <NavLink
          style={({ isActive }) => (isActive ? { color: "red" } : baseColor)}
          to={item.to}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
}
