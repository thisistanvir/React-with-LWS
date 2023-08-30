import React from "react";

class Button extends React.Component{

  // lifecycle
  shouldComponentUpdate(nextProps){
    const {change: currentChange, locale: currentLocale} = this.props;
    const {change: nextChange, locale: nextLocale} = nextProps;

    if(nextChange === currentChange && nextLocale === currentLocale){
      return false;
    }else{
      return true;
    }
  }




  render(){
    const {change, locale} = this.props;
    return(
      <button onClick={() => change(locale)}>
        Click Here
      </button>
    );
  }
}

export default Button;