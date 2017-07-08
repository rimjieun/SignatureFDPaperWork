var React = require("react");
var ReactDOMServer = require('react-dom/server');
var Fitness = require('../forms/Fitness');
var FileSaver = require('file-saver');




var employeeMain = React.createClass({
  printPDF: function(){

      const doc = ReactDOMServer.renderToString(<Fitness />);

      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');

      var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
          '<foreignObject width="100%" height="100%">' +
          doc +
          '</foreignObject>' +
          '</svg>';

      var DOMURL = window.URL || window.webkitURL || window;

      var img = new Image();
      var svg = new Blob([data], {type: 'image/svg+xml'});
      var url = DOMURL.createObjectURL(svg);

      img.onload = function() {
          ctx.drawImage(img, 0, 0);
          DOMURL.revokeObjectURL(url);
      };

      img.src = url;

      canvas.toBlob(function(blob) {
          FileSaver.saveAs(blob, "fitness.png");
      });

  },


  render: function() {
    return (
      <div>
        <div>
          <ul id="nav-side" className="side-nav fixed" style={{transform: "translateX(0%)"}}>
            <ul className="collapsible collapsible-accordion">
              <li className="bold active">
                <a className="collapsible-header active waves-effect waves-brown FDbrownDark">
                  <span className="FDblueText">User Name</span>
                </a>
                <div className="collapsible-body" style={{display: "block"}}>
                  <ul>
                    <li><a href="welcome.html">Update Password</a></li>
                    <li><a href="index.html">Log Out</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="fa-ul">
              <li><a href="welcome.html">Welcome</a></li>
              <li><a href="Handbook.html"><i className="fa-li fa fa-check-square"></i>&nbsp; Employee Handbook</a></li>
              <li><a href="HandbookReceipt.html">Handbook Receipt Acknowledgement</a></li>
              <li><a href="BenefitsGuide.html">Benefits Guide</a></li>
              <li><a href="Beneficiary.html">401k Beneficiary Designation Form</a></li>
              <li><a href="Investment.html">401k Direction of Investment Form</a></li>
              <li><a href="SalaryDeferral.html">401k Salary Deferral Agreement</a></li>
              <li><a href="FirmDirectory.html">Firm Directory Information Request</a></li>
              <li><a href="DependantCareApp.html">Dependant Care Application</a></li>
              <li><a href="cDependantCareStat.html">Dependant Care Statement</a></li>
              <li><a href="DependentCarePlan.html">Dependent Care Assistance Plan</a></li>
              <li><a href="DirectDeposit.html">Direct Deposit Form</a></li>
              <li><a href="G-4.html">G-4 Form</a></li>
              <li><a href="W-4.html">W-4 Form</a></li>
              <li><a href="I9.html">I9 Form</a></li>
              <li><a href="parking.html">Laz Parking Contract</a></li>
              <li className="active"><a href="#/employee/fitness">Pulse Fitness Agreement</a></li>
              <li><a href="ComputerPolicy.html">Computer & Network Policy</a></li>
              <li><a href="InternetPolicy.html">Internet Access Policy</a></li>
              <li><a href="HarassmentPolicy.html">Unlawful Harassment Policy</a></li>
            </ul>
          </ul>
        </div>

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
                      <a className="list-group-item" href="#" onClick={this.printPDF}><i className="fa fa-download fa-2x" aria-hidden="true"></i>{"\u00A0"}; CurrentFileName.PDF</a>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main>
            {this.props.children}
        </main>

        <footer className="page-footer FDbrownLight white-text">
          <div className="container">
            <div className="row">
              <div className="col l5 s12">
                <img src="assets/images/logo-white.png" />
                <p>
                  HEADQUARTERS<br />
                  1230 Peachtree Street, NE<br />
                  Suite 1800<br />
                  Atlanta, GA 30309<br />
                  <a href="http://www.signaturefd.com/wp-content/uploads/2016/09/SigFD-Parking-Directions-and-Map.pdf">Directions</a>
                </p>
                <p>
                  NORTH CAROLINA OFFICE<br />
                  4601 Park Road<br />
                  Suite 450<br />
                  Charlotte, NC 28209 <br />
                </p>
                <p>
                  Tel: (404) 253-7600<br />
                  Fax: (404) 253-7601
                </p>
              </div>
              <div className="valign-wrapper col l6 offset-l1 s12">
                <div className="valign-wrapper">
                  <h5 className="white-text valign-wrapper">Financial Design for Life</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright FDbrownDark white-text">
            <div className="container">
              <p>
                ©2016 SignatureFD. All rights reserved. {"\u00A0"}
                <span style={{color: "#ffffff"}}>{"\u00A0"}
                <a href="http://www.signaturefd.com/definitions">Definitions</a> |
                <a href="http://www.signaturefd.com/privacy">Privacy</a> |
                <a href="http://www.signaturefd.com/disclosure-information">Disclosure</a>{"\u00A0"}{"\u00A0"}{"\u00A0"}</span>
                <a target="_blank" href="https://twitter.com/SignatureFD">{"\u00A0"}{"\u00A0"}{"\u00A0"}<i className="fa fa-fw fa-twitter fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.facebook.com/SignatureFD/">{"\u00A0"}<i className="fa fa-fw fa-facebook fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.linkedin.com/company/signaturefd">{"\u00A0"}<i className="fa fa-fw fa-linkedin fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="http://www.signaturefd.com/feed/rss/">{"\u00A0"}<i className="fa fa-fw fa-rss fa-lg" aria-hidden="true"></i></a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = employeeMain;