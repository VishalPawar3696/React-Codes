import { useState ,useEffect} from "react";

function AfterRender() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    alert(document.title=`you CLicked ${count} times`)
  },[count])

  return (
    <div>
      <h1>Count:{count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
      }}
      >
        increment
      </button>
    </div>
  );
}

export default AfterRender;
