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

  componentDidUpdate: function() {

    var newPassword = this.state.newPassword;
    var confirmPassword = this.state.confirmPassword;

    if (!schema.validate(newPassword)) {
      document.getElementById("new-pwd").classList.remove("fa-check-circle");
      document.getElementById("new-pwd").classList.add("fa-times-circle");
    } else if (schema.validate(newPassword)) {
      document.getElementById("new-pwd").classList.remove("fa-times-circle");
      document.getElementById("new-pwd").classList.add("fa-check-circle");
    } else if (newPassword === "") {
      document.getElementById("new-pwd").classList.remove("fa-check-circle");
      document.getElementById("new-pwd").classList.remove("fa-times-circle");
    }

    if (confirmPassword === "") {
      document.getElementById("conf-pwd").classList.remove("fa-times-circle");
      document.getElementById("conf-pwd").classList.remove("fa-check-circle");
    } else if (newPassword !== confirmPassword && confirmPassword !== "") {
      document.getElementById("conf-pwd").classList.remove("fa-check-circle");
      document.getElementById("conf-pwd").classList.add("fa-times-circle");
    } else if (newPassword === confirmPassword && confirmPassword !== "") {
      document.getElementById("conf-pwd").classList.remove("fa-times-circle");
      document.getElementById("conf-pwd").classList.add("fa-check-circle");
    }
  },

  handleChange: function(e) {
    this.setState({[e.target.name]: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();

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
      }
    }
  },

  render: function() {
    return (
      <div>
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <form className="col s12">
              <div style={{fontSize: "12px", color: "#564648"}}>
                Password must be at least <span style={{fontWeight: "800"}}>8 characters</span> long and must contain:<br />
                - At least one lowercase letter<br />
                - At least one uppercase letter<br />
                - At least one number<br />
                - At least one special character<br />
                - No spaces
              </div>
              <div className="row"></div>
              <div className="row">
                <div className="input-field col s12 createPwd">
                  <input id="passwordNew" type="password" className="validate"
                  name="newPassword" onChange={this.handleChange} />
                  <label htmlFor="password">Create New Password</label>
                  <i id="new-pwd" className="fa pwdIcon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 createPwd">
                  <input id="passwordNewConfirm" type="password" className="validate"
                   name="confirmPassword" onChange={this.handleChange}/>
                  <label htmlFor="password">Confirm New Password</label>
                  <i id="conf-pwd" className="fa pwdIcon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="row">
                <input className="saveBTN waves-effect waves-brown btn white-text right"
                onClick={this.handleSubmit} type="submit" value="UPDATE" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = UpdatePwd;