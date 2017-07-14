var React = require("react");
// var validator = require("validator");

var helpers = require("../../utils/helpers");

var UpdatePwd = React.createClass({

  getInitialState: function() {
    return {
      "newPassword": "",
      "ConfirmPassword": ""
    };
  },

  handleChange: function(e) {
    this.setState({[e.target.name]: e.target.value });
  },

  handleSubmit: function(e) {

    // if (this.state.newPassword )

    var newPassword = {
      password: this.state.newPassword
    };

    helpers.updatePassword(newPassword).then(function(nextLocation) {
      if (nextLocation !== undefined) {
        location.href = nextLocation;
      }
    });
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="passwordNew" type="password" className="validate"
                  name="newPassword" onChange={this.handleChange} />
                  <label htmlFor="password">Create New Password</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="passwordNewConfirm" type="password" className="validate" />
                  <label htmlFor="password">Confirm New Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container row">
          <a className="saveBTN waves-effect waves-brown btn white-text right" onClick={this.handleSubmit}>CONTINUE</a>
        </div>
      </div>
    );
  }
});

module.exports = UpdatePwd;