var React = require("react");

var helpers = require("../../utils/helpers");

var Login = React.createClass({

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
                  <input id="password" type="password" class="validate" />
                  <label for="password">Password from Welcome Email</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="container">
            <a class="saveBTN waves-effect waves-brown btn white-text right" id="login-btn" href="/reactIndex">CONTINUE</a>
        </div>
      </div>
    );
  }
});

module.exports = Login;