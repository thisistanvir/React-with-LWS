import React from "react";

import Button from "./Button";

class Clock extends React.Component{

  state = {date: new Date(), locale: "bn-BD"}

  // call after reload first time
  componentDidMount(){
    this.clockTimer = setInterval(()=> this.tick(), 1000)
  }

  // clear when not in the view
  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }

  // tick function
  tick() {
    this.setState({
      date: new Date()
    })
  }

  handleClick = (locale) => {
    this.setState({
      locale
    })
  }


  render(){
    const {date, locale} = this.state;

    return(
      <div>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {
        locale == "bn-BD" ? 
          <Button change={this.handleClick} locale="en-US" show enable={false} /> 
          : 
          <Button change={this.handleClick} locale="bn-BD" show={false} />
        }
      </div>
    );
  }
}

export default Clock;