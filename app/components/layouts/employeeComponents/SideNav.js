var React = require("react");

var employeeSideNav = React.createClass({

  render: function() {
    return (
      <div>
        <ul id="nav-side" className="side-nav fixed" style={{transform: "translateX(0%)"}}>
          <ul className="collapsible collapsible-accordion">
            <li className="bold active">
              <a className="collapsible-header active waves-effect waves-brown FDbrownDark">
                <span className="FDblueText">User Name</span>
              </a>
              <div className="collapsible-body" style={{display: "block"}}>
                <ul>
                  <li><a href="#/employee/password">Update Password</a></li>
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
    );
  }
});

module.exports = employeeSideNav;