import { useState } from "react";
import MyComponent from "./components/mayComponent";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div>{show && <MyComponent/>}</div>

      <p>
          <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
              {show ? 'Hide post' : 'Show post'}
          </button>
      </p>
    </div>
  )

}

export default App
