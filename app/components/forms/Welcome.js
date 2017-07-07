var React = require("react");

var helpers = require("../../utils/helpers");

var Welcome = React.createClass({

  render: function() {
    return (
      <div class="container">
        <div class="row"></div>
        <div class="row">
          <div class="row center-align">
            <h5 class="center-align">Welcome the SignatureFD family, and congratulations on your new position.</h5>
            <p class="center-align"> This website will walk you through all the paperwork you will need to complete during the on boarding process.</p>
            <video class="responsive-video" controls>
              <source src="assets/images/SignatureFD-CultureVideo_sm.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="container">
          <a class="saveBTN waves-effect waves-brown btn white-text right" href="Handbook.html">CONTINUE</a>
        </div>
      </div>
    );
  }
});

module.exports = Welcome;