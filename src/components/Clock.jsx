import React from "react";

class Clock extends React.Component{

  state = {date: new Date()}

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

  render(){
    const {date} = this.state;
    const {locale} = this.props;

    return(
      <h1 className="heading">
        <span className="text">Hello - {date.toLocaleTimeString(locale)}</span>
      </h1>
    );
  }
}

export default Clock;