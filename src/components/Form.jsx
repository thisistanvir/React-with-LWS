import React from "react";

export default class Form extends React.Component{

  state = {
    title: "JavaScript",
    text: 'JavaScript is awesome',
    library: 'react',
    isAwesome: true,
  }

  
  handleChange = (e) =>{
    if(e.target.type === 'text'){
      this.setState({
        title : e.target.value,
      })
    } else if(e.target.type === 'textarea'){
      this.setState({
        text : e.target.value,
      });
    }else if(e.target.type === 'select-one'){
      this.setState({
        library : e.target.value,
      });
    }else if(e.target.type === 'checkbox'){
      this.setState({
        isAwesome : e.target.checked,
      });
    }else{
      console.log('Nothing Happen')
    }
  }

  handleSubmit = (e)=>{
    const {title, text, library, isAwesome } = this.state;
    e.preventDefault();

    console.log(title,text,library,isAwesome)

  }


  render(){
    const {title, text, library, isAwesome } = this.state;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={title} onChange={this.handleChange} placeholder="write you title." />
          <br />
          <br />
          <textarea name="text" value={text} onChange={this.handleChange}></textarea>
          <br />
          <br />
          <select name="select" value={library} onChange={this.handleChange} >
            <option value="react" selected>React</option>
            <option value="angular">Angular</option>
          </select>
          <br />
          <br />
          <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}