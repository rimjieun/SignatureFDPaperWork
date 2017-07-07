var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var IndexMain = require("../components/IndexMain");
var Login = require("../components/pages/Login");
var UpdatePwd = require("../components/pages/UpdatePwd");
// var Admin = require("../components/pages/Admin");

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={IndexMain}>
      <Route path="update/password" component={UpdatePwd} />
      <IndexRoute component={Login} />
    </Route>
  </Router>
);