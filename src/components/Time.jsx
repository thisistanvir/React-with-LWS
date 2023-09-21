import { useEffect, useRef, useState } from "react";

function Time(){
  const [time, setTime] = useState(new Date());
  
  const buttonRef = useRef();

  const tick = () =>{
    setTime(new Date())
  }

  useEffect(()=>{
  buttonRef.current = setInterval(tick, 1000);

    // useEffect cleanup - stop the timer
    return() => {
      clearInterval(buttonRef.current)
    }
  },[])

    return(
      <div>
        <p>Time: {time.toLocaleTimeString()}</p> 
        <p><button type="button" onClick={()=> clearInterval(buttonRef.current)}>Stop Time</button></p>       
      </div>
    )
}
export default Time;