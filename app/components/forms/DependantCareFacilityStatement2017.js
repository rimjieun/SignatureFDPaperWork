var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("DependantCareFacilityStatement2017");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/DependantCareFacilityStatement2017_1.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;