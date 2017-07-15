var React = require("react");

var helpers = require("../../utils/helpers");

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            Page not found. Click <a href="/">here</a> to go to log in page.
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NotFound;