import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function User() {
  const [data, setData] = useState([]);
  // const ids = [1, 2, 3, 4, 5];
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);
  return (
    <div>
      {" "}
      <h1>User</h1>
      {data.map((user) => (
        <div key={user.id}>
          <h3>{user.first_name}</h3>
          <div>
            <img width="100px" src={user.avatar} alt={user.id} />
          </div>
          <Link to={`/Users/${user.id}`}>Show More Details </Link>{" "}
        </div>
      ))}
    </div>
  );
}
