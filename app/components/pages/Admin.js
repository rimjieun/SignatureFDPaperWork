var React = require("react");

var helpers = require("../../utils/helpers");

var Admin = React.createClass({

  getInitialState: function() {
    return {
      "EmailAddress": "",
      "Password": ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      
    );
  }
});

module.exports = Admin;