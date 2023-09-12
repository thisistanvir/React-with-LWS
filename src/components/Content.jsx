import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";


export default function Content(){

  // useContext hook for function component
  const contexts = useContext(ThemeContext);

  const {theme, switchTheme} = contexts;
  return(
    <div>
      <h2>This is Section</h2>
      <Counter >
          {(count, incrementCount)=>(
            <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
          )}
      </Counter>
    </div>
  )
}


// class component
// export default class Content extends React.Component{
//   render(){
//   const {theme, switchTheme} = this.context;
  
//     return(
//       <div>
//         <h2>This is Section</h2>
//         <Counter >
//             {(count, incrementCount)=>(
//               <HoverCounter count={count} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//             )}
//         </Counter>
//       </div>
//     )
//   }
// }
// // contextType for class component
// Content.contextType = ThemeContext;