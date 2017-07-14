var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("i-9-paper-version");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/i-9-paper-version_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/i-9-paper-version2.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/i-9-paper-version_3.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;