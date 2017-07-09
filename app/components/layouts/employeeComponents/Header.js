var React = require("react");

var employeeHeader = React.createClass({

  render: function() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav className="nav-extended  FDbrownLight" role="navigation">
            <div className="container">
              <div className="nav-wrapper">
                <a href="#" className="brand-logo"><img src="assets/images/logo-white.png" /></a>
                <a href="#" data-activates="nav-side" className="button-collapse"><i className="material-icons">menu</i></a>
              </div>
              <div>
                <div className="row">
                  <ul className="left" style={{marginRight: "30%"}}>
                    <a className="list-group-item" href="#"><i className="fa fa-download fa-2x" aria-hidden="true"></i>&nbsp; CurrentFileName.PDF</a>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
});

module.exports = employeeHeader;