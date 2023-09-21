import { useEffect, useRef } from "react";
import Input from "./Input";

function Form(){

  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  }, [])

    return(
      <div>
        <Input ref={inputRef} type="text" placeholder="Enter something here..."/>
      </div>
    )
}
export default Form;