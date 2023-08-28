// import React from "react";
import ReactDOM from 'react-dom/client';

function Clock({locale}){
  return(
    <h1 className="heading">
      <span className="text">Hello {new Date().toLocaleDateString(locale)}</span>
    </h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Clock locale="bn-BD"/>);

