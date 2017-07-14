var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    this.props.updateCurrentForm("DirectDepositForm");
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/DirectDepositForm_1.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;