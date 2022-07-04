import "./styles.css";
import SettimeClearner from './components/SettimeCleaner'
import { useState } from "react";

export default function App() {
  const [show,setShow]=useState(false)
  return (
    <div className="App">
      {show &&  <SettimeClearner/>}

      <button onClick={()=>setShow(!show)}>TOggle</button>
     
    </div>
  );
}
