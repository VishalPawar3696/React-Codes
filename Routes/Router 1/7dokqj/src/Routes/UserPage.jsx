import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";

export default function UserPage() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${params.user_id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div>
      <h1>User Single Page</h1>
      <h2>Users {params.user_id}</h2>
      <h3>
        Name:{data.first_name} {data.last_name}
      </h3>
      <h4>Email:{data.email}</h4>
      <img src={data.avatar} alt="okok" />

      <div>
        <Link to="/users">Go Back</Link>
      </div>
    </div>
  );
}
