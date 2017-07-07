var React = require("react");
var ReactDOM = require("react-dom");
var indexRoutes = require("./config/indexRoutes")
var employeeRoutes = require("./config/employeeRoutes");

ReactDOM.render(indexRoutes, document.getElementById("index"));
ReactDOM.render(employeeRoutes, document.getElementById("employee"));