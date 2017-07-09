var React = require("react");

var indexHeader = React.createClass({
  render: function() {
    return (
      <header style={{paddingLeft: "0px"}}>
        <div className="navbar-fixed">
          <nav className="nav-extended  FDbrownLight white-text" role="navigation">
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img src="assets/images/logo-white.png" /></a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = indexHeader;