var React = require("react");

var helpers = require("../../utils/helpers");

var NotFound = React.createClass({
  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <div className="row"></div>
          <div className="row" style={{color: "#564648"}}>
            <div className="row col s12">
              <h4>Page not found.</h4>
            </div>
            <div className="row col s12">
              Click <a href="/">here</a> to go to log in page.
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = NotFound;