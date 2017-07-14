var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("FormG4");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/FormG4_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/FormG4_2.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;