var React = require("react");

var Handbook = React.createClass({

  componentDidMount: function() {
    var fileName = location.href.split("/");
    fileName = fileName[fileName.length - 1];
    this.props.updateCurrentForm(fileName);
  },

  render: function() {
    return (
      <div>
        <div>
          <img className="page" src="/assets/images/FormW4_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="/assets/images/FormW4_2.jpeg" alt="" />
        </div>
      </div>
    );
  }
});

module.exports = Handbook;