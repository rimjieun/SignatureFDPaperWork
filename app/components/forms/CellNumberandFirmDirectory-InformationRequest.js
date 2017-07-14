var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("CellNumberandFirmDirectory-InformationRequest");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/CellNumberandFirmDirectory-InformationRequest_1.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;