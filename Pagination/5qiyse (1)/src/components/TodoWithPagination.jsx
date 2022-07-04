import { useEffect, useState } from "react";

function TodoWithPagination() {
  const [data, setData] = useState(0);
  const [page,setPage]=useState(1)

  const getTodos = async (page=1) => {
    try {
      let data = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      data = await data.json();
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTodos(page);
  }, [page]);
  return (
    <div>
      <h1>Pagination</h1>
      <div>
        <div>
       {data.map((todo)=>{
         return(
           <div><h3>{todo.title}</h3></div>
         )
       })}
        </div>
            </div>
            <div>
      <button disabled={page===1} onClick={()=>setPage(page=>page-1)}>Prev</button>
      <span>{page}</span>
      <button onClick={()=>setPage(page=>page+1)}>Next</button>
    </div>
    </div>
  );
}

export default TodoWithPagination;
