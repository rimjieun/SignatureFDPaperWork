var React = require("react");

var helpers = require("../../utils/helpers");

var UpdatePwd = React.createClass({

  getInitialState: function() {
    return {
      "EmailAddress": "",
      "Password": "",
      "ConfirmPassword": ""
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <div>
        <div class="container">
          <div class="row"></div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s12">
                  <input placeholder="First.Last@SignatureFD.com" id="email" type="email" class="validate" />
                  <label for="email">Email</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="passwordNew" type="password" class="validate" />
                  <label for="password">Create New Password</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="passwordNewConfirm" type="password" class="validate" />
                  <label for="password">Confirm New Password</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="container">
            <a class="saveBTN waves-effect waves-brown btn white-text right" href="welcome.html">CONTINUE</a>
        </div>
      </div>
    );
  }
});

module.exports = UpdatePwd;