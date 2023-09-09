import ClickCounter from "./components/ClickCounter"
import Counter from "./components/Counter"
import HoverCounter from "./components/HoverCounter"

function App() {

  return (
    <div>
     {/* <Counter 
      render={(count, incrementCount)=>(
        <ClickCounter count={count} incrementCount={incrementCount} />
     )} /> */}

     {/* we can all call this way */}
     <Counter>
        {(count, incrementCount)=>(
            <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
     
     <Counter >
          {(count, incrementCount)=>(
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
      </Counter>
    </div>
  )

}

export default App
