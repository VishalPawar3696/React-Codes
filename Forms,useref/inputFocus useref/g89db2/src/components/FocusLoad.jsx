import {useRef} from 'react'


export default function FocusLoad(){
const ref=useRef(null);

const handleFocus=()=>{
  ref.current.focus();
}
return(
  <div>
    <label htmlFor="">name</label>
    <input  ref={ref} type="text"/>
    <button onClick={handleFocus}>Focus</button>
    </div>
  
)
}