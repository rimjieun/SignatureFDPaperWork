var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("DependentCareAssistancePlan");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/DependentCareAssistancePlan_1.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;