
import { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useCallback for memorize function
  const handleClickByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1)
  }, []) //dependency

  // useCallback for memorize function
  const handleClickByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5)
  }, []) //dependency

  // useMemo for memorize function return value
  const isEvenOdd = useMemo(() =>{
    let i = 0;
    while(i<1000000000) i += 1; //costly operation

    return count1 % 2 === 0;
  }, [count1]) // returning value dependency

  return (
    <div className="app">
      <Title/>
      <ShowCount count={count1} title="Counter 1"/>
      <span>{isEvenOdd ? 'Even' : 'Odd'}</span>
      <Button handleClick={handleClickByOne} >Increment by 1</Button>
      <hr />
      <ShowCount count={count2} title="Counter 2"/>
      <Button handleClick={handleClickByFive} >Increment by 5</Button>
    </div>
  )

}

export default App
