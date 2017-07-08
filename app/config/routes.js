var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var IndexLayout = require("../components/layouts/indexLayout");
var Login = require("../components/pages/Login");
var UpdatePwd = require("../components/pages/UpdatePwd");
// var Admin = require("../components/pages/Admin");

var EmployeeLayout = require("../components/layouts/employeeLayout");
var Welcome = require("../components/forms/Welcome");
var Handbook = require("../components/forms/Handbook");
var Fitness = require("../components/forms/Fitness");

module.exports = (
  <Router history={hashHistory}>
    <Route component={IndexLayout}>
      <Route path="/" component={Login} />
      <Route path="update/password" component={UpdatePwd} />
    </Route>
    <Route component={EmployeeLayout}>
      <Route path="employee/welcome" component={Welcome} />
      <Route path="employee/fitness" component={Fitness} />
      <Route path="employee/handbook" component={Handbook} />
    </Route>
    
  </Router>
);

// <Route path="*" component={Not Found}/>