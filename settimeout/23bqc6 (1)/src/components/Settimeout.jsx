import { useEffect, useState } from "react";

function Settimeout(){
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  },[count])

  return(
    <div className="App">
      <h1>{count}</h1>
    </div>
  )
}


export default Settimeout;