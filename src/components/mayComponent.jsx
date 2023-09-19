import { useEffect, useState } from "react";

function MyComponent(){
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date);

  // SideEffect for Document Title
  useEffect(()=>{
    console.log("Updating document title")
    document.title = `Clicked ${count} times`;
  }, [count]) // used 2nd parameter for change specific update
  
  
  // SideEffect for Date
  useEffect(()=>{
    console.log("Starting Timer")
    const interval = setInterval(tick, 1000);

     // useEffect cleanup - stop the timer
     return () => {
      console.log('component unmounted');
      clearInterval(interval);
  };
  }, []) //empty array for load first time

  const addClick = () => {
    setCount((prevCount) => prevCount + 1);
  }

  const tick = () => {
    console.log(`clock ticking!`);
    setDate(new Date());
  };

    return(
      <div>
         <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
      </div>
    )
}
export default MyComponent;