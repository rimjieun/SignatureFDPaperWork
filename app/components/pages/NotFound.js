var React = require("react");

var helpers = require("../../utils/helpers");

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <h1>Page not found.</h1>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NotFound;