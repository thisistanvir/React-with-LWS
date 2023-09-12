import React from "react";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import ThemeContext from "./contexts/ThemeContext";

export default class App extends React.Component{

  state = {
    theme: 'light',
    switchTheme: () =>{
      this.setState(({theme})=>{
        if('light' === theme){
          return{
            theme: 'dark',
          }
        }else {
          return{
            theme: 'light',
          }
        }
      })
    }
  }

  render(){
    
    return (
      <div>
     <Counter>
        {(count, incrementCount)=>(
            <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      
      <ThemeContext.Provider  value={this.state} >
          <Section/>
      </ThemeContext.Provider>
        
      </div>
    )
  }
}

