var React = require("react");
var passwordValidator = require("password-validator");

var schema = new passwordValidator();
var minSchema = new passwordValidator();
var lowercaseSchema = new passwordValidator();
var uppercaseSchema = new passwordValidator();
var numberSchema = new passwordValidator();
var specialCharSchema = new passwordValidator();
var noSpacesSchema = new passwordValidator();

schema
.is().min(8)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().symbols()
.has().not().spaces();

minSchema.is().min(8);
lowercaseSchema.has().lowercase();
uppercaseSchema.has().uppercase();
numberSchema.has().digits();
specialCharSchema.has().symbols();
noSpacesSchema.has().not().spaces();

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

    function checkRequirements(schemaName, id) {
      if (schemaName.validate(newPassword)) {
        document.getElementById(id).style.color = "green";
      } else {
        document.getElementById(id).style.color = "red";
      }
    }

    checkRequirements(minSchema, "min-char");
    checkRequirements(lowercaseSchema, "lowercase");
    checkRequirements(uppercaseSchema, "uppercase");
    checkRequirements(numberSchema, "number");
    checkRequirements(specialCharSchema, "special-char");
    checkRequirements(noSpacesSchema, "no-spaces");

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
                Password must be at least <span id="min-char" style={{fontWeight: "800"}}>8 characters</span> long and must contain:<br />
                <span id="lowercase" style={{fontWeight: "800"}}>- At least one lowercase letter</span><br />
                <span id="uppercase" style={{fontWeight: "800"}}>- At least one uppercase letter</span><br />
                <span id="number" style={{fontWeight: "800"}}>- At least one number</span><br />
                <span id="special-char" style={{fontWeight: "800"}}>- At least one special character</span><br />
                <span id="no-spaces" style={{fontWeight: "800"}}>- No spaces</span>
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