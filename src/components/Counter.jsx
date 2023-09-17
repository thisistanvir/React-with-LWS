import { useState } from "react";

export default function Counter(){
const [count, setCount] = useState(0);


let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1);
            i += 1;
        }
    };


  return(
    <div>
      <p>{count}</p>
      <p>
        {/* <button type="button" onClick={()=> setCount(count + 1)}>Plus 1</button> */}

        {/* Should have to use like this */}
        <button type="button" onClick={()=> setCount((prevState) => prevState + 1)}>Plus 1</button>
      </p>

      <p>
        <button type="button" onClick={addFive}>Plus 5</button>
      </p>
    </div>
  )
}