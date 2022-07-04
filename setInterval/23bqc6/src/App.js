import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count,setCount]=useState(0);
  
  const StartTimer=()=>{ 
    setInterval(()=>{
      setCount((prev)=>prev+1)
    },1000)
  }
  useEffect(()=>{
    StartTimer()
  },[])
  return (
    <div className="App">
      <h1>SetInterval</h1>
    <h1>Time:{count}</h1>

    
    </div>
  );
}
