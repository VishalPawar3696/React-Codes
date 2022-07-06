import { useRef, useTransition } from "react";

function Scroll() {
  const ref = useRef();
  const handleClick = () => {
    ref.current.scrollTop = 0;
  };
  const data = new Array(100).fill(0).map((item, i) =><li>{i}</li>);
  console.log(data);

  return (
    <>
    <div ref={ref} style={{ height: "300px", overflow: "scroll" }}>
      <ul>{data}</ul>
    </div>
    <div>
    <button onClick={handleClick}>ScroolToTop</button>
    </div>
    </>
  );
}

export default Scroll;
