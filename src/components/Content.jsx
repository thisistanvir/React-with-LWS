import ThemeContext from "../contexts/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";


function Content(){
  return(
    <div>
      <h2>This is Section</h2>
      <Counter >
          {(count, incrementCount)=>(
            <ThemeContext.Consumer> 
              {
                ({theme}) => (
                  <HoverCounter count={count} incrementCount={incrementCount} theme={theme} />
                  )
              }
            </ThemeContext.Consumer>
          )}
      </Counter>
    </div>
  )
}

export default Content;