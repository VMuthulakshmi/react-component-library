import React from 'react';
import ReactDOM from 'react-dom/client';

function HelloWorld() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, "HelloWorld");
}

// import HelloWorld from "./components/HelloWorld/index";
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(HelloWorld, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export { HelloWorld };
