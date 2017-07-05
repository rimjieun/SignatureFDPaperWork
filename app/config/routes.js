var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Handbook = require("../components/forms/Handbook");
var Fitness = require("../components/forms/Fitness")

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="fitness" component={Fitness} />
      <IndexRoute component={Handbook} />
    </Route>
  </Router>
);