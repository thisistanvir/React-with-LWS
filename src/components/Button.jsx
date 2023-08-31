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
    const {change, locale, show, enable} = this.props;

    if(!enable){return false}

    return(
      <div>
        <button onClick={() => change(locale)}>
          {locale === "en-US" ? "ঘড়ি পরিবর্তন করুন" : "Change Clock"}
        </button>
        
        {show && <p>Hello</p>}
      </div>
    );
  }
}

export default Button;