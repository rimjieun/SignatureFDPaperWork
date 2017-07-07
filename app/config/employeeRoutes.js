var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var EmployeeMain = require("../components/EmployeeMain");
var Welcome = require("../components/forms/Welcome");
var Handbook = require("../components/forms/Handbook");
var Fitness = require("../components/forms/Fitness");

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={EmployeeMain}>
      <Route path="handbook" component={Handbook} />
      <Route path="fitness" component={Fitness} />
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
);