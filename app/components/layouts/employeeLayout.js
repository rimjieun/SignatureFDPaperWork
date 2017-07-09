var React = require("react");

var helpers = require("../../utils/helpers");

var employeeLayout = React.createClass({

  getInitialState: function() {
    return {
      Date: "",
      FirstName: "",
      Employer: "",
      SuiteAddress: "",
      OfficePhone: "",
      Gender: "",
      EmailAddress: "",
      EmergencyContact: "",
      EmergencyContactRelationshipAndContact: ""
    };
  },

  componentDidMount: function() {
    helpers.getData().then(function(employee) {
      console.log(employee.data[0]);
      console.log(employee.data[0].FirstName);
      this.setState({
        Date: employee.data[0].Date,
        FirstName: employee.data[0].FirstName,
        Employer: employee.data[0].Employer,
        SuiteAddress: employee.data[0].SuiteAddress,
        OfficePhone: employee.data[0].OfficePhone,
        Gender: employee.data[0].Gender,
        EmailAddress: employee.data[0].EmailAddress,
        EmergencyContact: employee.data[0].EmergencyContact,
        EmergencyContactRelationshipAndContact: employee.data[0].EmergencyContactRelationshipAndContact
      });
    }.bind(this));
  },

  componentDidUpdate: function() {
    console.log(JSON.stringify(this.state, null, 2));
  },

  handleChange: function(e) {
    this.setState({[e.target.name]: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    helpers.postData(this.state).then(function(status) {
      console.log(status);
    });
  },

  render: function() {

    var childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        appState: this.state,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      })
    );

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
                    <li><a href="#/update/password">Update Password</a></li>
                    <li><a href="#/">Log Out</a></li>
                  </ul>
                </div>
              </li>
            </ul>
            <ul className="fa-ul">
              <li className="active"><a href="#/employee/welcome">Welcome</a></li>
              <li><a href="#/employee/handbook"><i className="fa-li fa fa-check-square"></i>&nbsp; Employee Handbook</a></li>
              <li><a href="#/employee/welcome">Handbook Receipt Acknowledgement</a></li>
              <li><a href="#/employee/welcome">Benefits Guide</a></li>
              <li><a href="#/employee/welcome">401k Beneficiary Designation Form</a></li>
              <li><a href="#/employee/welcome">401k Direction of Investment Form</a></li>
              <li><a href="#/employee/welcome">401k Salary Deferral Agreement</a></li>
              <li><a href="#/employee/welcome">Firm Directory Information Request</a></li>
              <li><a href="#/employee/welcome">Dependant Care Application</a></li>
              <li><a href="#/employee/welcome">Dependant Care Statement</a></li>
              <li><a href="#/employee/welcome">Dependent Care Assistance Plan</a></li>
              <li><a href="#/employee/welcome">Direct Deposit Form</a></li>
              <li><a href="#/employee/welcome">G-4 Form</a></li>
              <li><a href="#/employee/welcome">W-4 Form</a></li>
              <li><a href="#/employee/welcome">I9 Form</a></li>
              <li><a href="#/employee/welcome">Laz Parking Contract</a></li>
              <li><a href="#/employee/fitness">Pulse Fitness Agreement</a></li>
              <li><a href="#/employee/welcome">Computer & Network Policy</a></li>
              <li><a href="#/employee/welcome">Internet Access Policy</a></li>
              <li><a href="#/employee/welcome">Unlawful Harassment Policy</a></li>
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
                      <a className="list-group-item" href="#"><i className="fa fa-download fa-2x" aria-hidden="true"></i>&nbsp; CurrentFileName.PDF</a>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>

        <main>
          {childrenWithProps}
        </main>

        <footer className="page-footer FDbrownLight white-text">
          <div className="container">
            <div className="row">
              <div className="col l5 s12">
                <img src="assets/images/logo-white.png"/>
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
                ©2016 SignatureFD. All rights reserved. &nbsp;
                <span style={{color: "#ffffff"}}>&nbsp;
                <a href="http://www.signaturefd.com/definitions">Definitions</a> |
                <a href="http://www.signaturefd.com/privacy">Privacy</a> |
                <a href="http://www.signaturefd.com/disclosure-information">Disclosure</a>&nbsp;&nbsp;&nbsp;</span>
                <a target="_blank" href="https://twitter.com/SignatureFD">&nbsp;&nbsp;&nbsp;<i className="fa fa-fw fa-twitter fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.facebook.com/SignatureFD/">&nbsp;<i className="fa fa-fw fa-facebook fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="https://www.linkedin.com/company/signaturefd">&nbsp;<i className="fa fa-fw fa-linkedin fa-lg" aria-hidden="true"></i></a>
                <a target="_blank" href="http://www.signaturefd.com/feed/rss/">&nbsp;<i className="fa fa-fw fa-rss fa-lg" aria-hidden="true"></i></a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});

module.exports = employeeLayout;