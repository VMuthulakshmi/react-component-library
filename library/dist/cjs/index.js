'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom/client');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

function HelloWorld() {
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "container"
  }, "HelloWorld");
}

// import HelloWorld from "./components/HelloWorld/index";
var root = ReactDOM__default["default"].createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React__default["default"].createElement(React__default["default"].StrictMode, null, /*#__PURE__*/React__default["default"].createElement(HelloWorld, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

exports.HelloWorld = HelloWorld;
