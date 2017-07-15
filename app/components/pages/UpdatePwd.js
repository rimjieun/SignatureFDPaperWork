var React = require("react");
var passwordValidator = require("password-validator");

var schema = new passwordValidator();

schema
.is().min(8)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().symbols()
.has().not().spaces();

var helpers = require("../../utils/helpers");

var UpdatePwd = React.createClass({

  getInitialState: function() {
    return {
      "newPassword": "",
      "confirmPassword": ""
    };
  },

  handleChange: function(e) {
    this.setState({[e.target.name]: e.target.value });
  },

  handleSubmit: function(e) {
    var newPassword = this.state.newPassword;
    var confirmPassword = this.state.confirmPassword;

    if (newPassword === confirmPassword) {
      if (schema.validate(newPassword)) {
        var newPassword = {
          password: this.state.newPassword
        };

        helpers.updatePassword(newPassword).then(function(nextLocation) {
          if (nextLocation !== undefined) {
            location.href = nextLocation;
          }
        });
      } else {
        console.log("Password must be at least 8 characters long and must contain the following:");
        console.log("- At least one lowercase letter.");
        console.log("- At least one uppercase letter.");
        console.log("- At least one numerical digit.");
        console.log("- At least one special character.");
        console.log("- No spaces.");
      }
    } else {
      console.log("Passwords do not match.");
    }
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
                  <input id="passwordNewConfirm" type="password" className="validate"
                   name="confirmPassword" onChange={this.handleChange}/>
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