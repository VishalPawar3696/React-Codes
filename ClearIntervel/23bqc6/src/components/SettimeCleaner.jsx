import { useEffect, useState } from "react";

function SettimeCleaner(){
  let id;
  const [count,setCount]=useState(0)
const StartTimer=()=>{
  id= setInterval(()=>{
    setCount((prev)=>prev+1)
  },1000);

}


useEffect(()=>{
  StartTimer();

  const cleanUp=()=>{
    clearInterval(id);
  }
  return cleanUp;
  
},[])

  return(
    <div className="App">
      <h1>Count:{count}</h1>
      <h2>{Date}</h2>

    </div>

  )
}
export default SettimeCleaner;