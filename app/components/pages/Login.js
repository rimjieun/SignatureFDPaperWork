var React = require("react");

var helpers = require("../../utils/helpers");

var Login = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();

    var employeeCredentials = {
      email: document.getElementById("email").value.trim(),
      password: document.getElementById("password").value.trim()
    };

    helpers.authenticateUser(employeeCredentials).then(function(nextLocation) {
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
          <div className="row"></div>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="First.Last@SignatureFD.com" type="email"
                  id="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input placeholder="Password" type="password"
                  id="password" className="validate" />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <div className="row">
                <input className="saveBTN waves-effect waves-brown btn white-text right" type="submit" id="login-btn"
                onClick={this.handleSubmit} value="LOG IN" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Login;