import { useRef, useState } from "react";

function Timer(){
  const [count,setCount]=useState(0);
  const timeRef=useRef(null)

  const startCount=()=>{
    if(timeRef.current!==null) return;
    timeRef.current=setInterval(()=>{
      setCount((count)=>count+1)
    },1000)
  }


  const pauseCount=()=>{
    clearInterval(timeRef.current);
    timeRef.current=null;
  }
  const resetCount=()=>{
 pauseCount()
    setCount(0);
    
      }

return(
  <div>
    <h1>Timer:{count}</h1>
    <button onClick={startCount}>Start</button>
    <button onClick={resetCount}>Reset</button>
    <button onClick={pauseCount}>Pause</button>
  </div>
)
}


export default Timer;