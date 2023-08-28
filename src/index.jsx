import React from "react";
import ReactDOM from 'react-dom';

const element = (
  <h1 className="heading">
    <span className="text">Hello {new Date().toLocaleDateString()}</span>
  </h1>
);

ReactDOM.createRoot(document.getElementById('root')).render(element);

