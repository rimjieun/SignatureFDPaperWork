var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var browserHistory = router.browserHistory;

var IndexRoute = router.IndexRoute;

var Main = require("../components/Main");
var Fitness = require("../components/forms/Fitness")

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="fitness" component={Fitness} />
      <IndexRoute component={Fitness} />
    </Route>
  </Router>
);