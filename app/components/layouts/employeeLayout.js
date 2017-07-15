var React = require("react");
var ReactDOMServer = require('react-dom/server');
var Fitness = require('../forms/PulseFitnessAgreement');
// var FileSaver = require('file-saver');
// var base64Img = require('base64-img');
// var pdfMake = require('pdfmake/build/pdfmake.js');
var fonts = require('pdfmake/build/vfs_fonts.js');



var helpers = require("../../utils/helpers");

var employeeLayout = React.createClass({

  getInitialState: function() {
    return {
      currentForm: "",
      fullName: "",
      employee: {
        Date: "",
        FirstName: "",
        LastName: "",
        Employer: "",
        SuiteAddress: "",
        OfficePhone: "",
        Gender: "",
        EmailAddress: "",
        EmergencyContact: "",
        EmergencyContactRelationshipAndContact: "",
        SocailSecurityNumber:"",
        MaritalStatus: "",
        PrimaryBeneficiary:  "",
        ContingentBenficiary:"",
        Signature: "",
        GymAccessCard: ""
      }
    };
  },

  componentDidMount: function() {
    helpers.getEmployeeData().then(function(employee) {
      this.setState({
        fullName: employee.data.FirstName + " " + employee.data.LastName,
        employee: {
          Date: employee.data.Date,
          FirstName: employee.data.FirstName,
          LastName: employee.data.LastName,
          Employer: employee.data.Employer,
          SuiteAddress: employee.data.SuiteAddress,
          OfficePhone: employee.data.OfficePhone,
          Gender: employee.data.Gender,
          EmailAddress: employee.data.EmailAddress,
          EmergencyContact: employee.data.EmergencyContact,
          EmergencyContactRelationshipAndContact: employee.data.EmergencyContactRelationshipAndContact,
          SocailSecurityNumber: employee.data.SocailSecurityNumber,
          MaritalStatus: employee.data.MaritalStatus,
          PrimaryBeneficiary: employee.data.PrimaryBeneficiary,
          ContingentBenficiary: employee.data.ContingentBenficiary,
          Signature: employee.data.Signature,
          GymAccessCard: employee.data.GymAccessCard
        } 
      });
    }.bind(this));
  },

  componentDidUpdate: function() {
    // this.runJS();
    var currentLocation = this.state.currentForm;

    if (currentLocation === "Welcome") {
      document.getElementById("download-btn").style.display = "none";
    }

    switch (currentLocation) {
      case "Welcome": case "SignatureFDEmployeeHandbook": case "BenefitsGuideSigFD2017": case "DependentCareAssistancePlan":
      document.getElementById("submit-btn").text = "CONTINUE";
    }
    
    var navId = parseInt(document.getElementById(currentLocation).getAttribute("data-value"));
    navId += 1;
    var nextLocation = document.getElementById(navId).getAttribute("href");
    document.getElementById("submit-btn").setAttribute("href", nextLocation);
    document.getElementById(currentLocation).classList.add("active");

    // <script src="../../../public/bundle.js"></script>
  },

  // handleNav: function(e) {
  //   document.querySelector(".sideNavBtn").classList.remove("active");
  //   document.
  //   navId = parseInt(document.getElementById(e.target.id).getAttribute("data"));
  //   nextLink = document.getElementById(e.target.id).getAttribute("href");
  //   fileName = " " + nextLink.substr(11) + ".pdf";
  //   document.getElementsByClassName("saveBTN").setAttribute("href", nextLink);
  //   document.getElementById("downBtn").textContent = fileName; 
  // },

  updateCurrentForm: function(fileName) {
    this.setState({"currentForm": fileName});
  },

  handleChange: function(e) {
    this.setState({
      "employee": {
        [e.target.name]: e.target.value
      }
    });
  },

  handleSubmit: function(e) {
    helpers.postEmployeeData(this.state.employee).then(function(status) {
      console.log(status);
    });
  },

  handleLogout: function(e) {
    helpers.logout().then(function(newLocation) {
      if (newLocation !== undefined)
      location.href = newLocation;
    });
  },

    // printPDF: function(){

    //     var formWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, { appState: this.state}));

    //     const doc = ReactDOMServer.renderToStaticMarkup(<div>{formWithProps}</div>);

    //     var canvas = this.refs.printCanvas;
    //     canvas.width = 1700;
    //     canvas.height = 2200;
    //     var ctx = canvas.getContext('2d');

    //     var textSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">' + '<foreignObject width="100%" height="100%">'+ '<div xmlns="http://www.w3.org/1999/xhtml">' + doc + '</div>' +'</foreignObject>' + '</svg>';


    //     var background = new Image();
    //     // Make sure the image is loaded first otherwise nothing will draw.
    //     background.onload = function() {
    //         ctx.drawImage(background,0,0);

    //         var textImg = new Image();

    //         textImg.onload = function() {

    //             ctx.drawImage(textImg, 0, 0);
    //             canvas.toBlob(function(blob) {
    //                 FileSaver.saveAs(blob, "fitness.png");
    //             });
    //         };

    //         textImg.src = 'data:image/svg+xml;utf8,'+textSvg;


    //     }

    //     background.src = "/assets/images/PulseFitnessAgreement_3.jpeg";

    // },

    // pdfMakeOpen: function() {

    //     // var data = base64Img.base64Sync('/assets/images/PulseFitnessAgreement_3.jpeg');

    //     // console.log(data);

    //     // var docDefinition = {
    //     //     background: [{
    //     //         image: 'data:image/jpeg;base64,' + data
    //     //     }],

    //     // };

    //     // pdfMake.createPdf(docDefinition).download("PulseFitness.pdf");

    //     var dd = {
    //         content: [
    //             {
    //                 text: '\n\n',
    //                 style: 'subheader'
    //             },
    //             {
    //                 text: 'Acknowledgement of Receipt of the Employee Handbook of SignatureFD, LLC \n\n\n',
    //                 style: 'subheader'
    //             },
    //             {
    //                 text: "I hereby acknowledge receipt of a copy of the Firm's Employee Handbook, which I have read and understand. I certify that, to the best of my knowledge, I have complied with these polices and procedures to the extent they have applied to me during the past year. I further understand and acknowledge that any violation of these policies and procedures may subject me to disciplinary action, including termination of employment.\n\n\n",
    //             },

    //             {
    //                 columns: [
    //                     {
    //                         width: 'auto',
    //                         alignment: "left",
    //                         stack: [
    //                             {
    //                                 text: "Signature",
    //                                 style: "form"
    //                             },
    //                             {
    //                                 text: "Printed Name",
    //                                 style: "form"
    //                             },
    //                             {
    //                                 text: "Date",
    //                                 style: "form"
    //                             }

    //                         ]
    //                     },
    //                     {
    //                         width: 'auto',
    //                         alignment: 'left',
    //                         stack: [
    //                             {
    //                                 style: 'data',
    //                                 text: this.state.employee.Signature+"           "
    //                             },
    //                             {
    //                                 style: 'data',
    //                                 text: this.state.employee.FirstName+" "+this.state.employee.LastName+"           "
    //                             },
    //                             {
    //                                 style: 'data',
    //                                 text: this.state.employee.Date+"           "
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }

    //         ],

    //         styles: {

    //             subheader: {
    //                 fontSize: 14,
    //                 bold: true,
    //                 decoration: 'underline',
    //                 alignment: 'center'

    //             },
    //             form: {
    //                 margin: [240, 0, 0, 8]		},
    //             data: {
    //                 decoration: "underline",
    //                 margin: [10, 0, 0, 8]
    //             }
    //         }
    //     }


    //     pdfMake.createPdf(dd).download("HandbookAcknowledgement.pdf");
    // },

  render: function() {

    var childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        appState: this.state,
        updateCurrentForm: this.updateCurrentForm,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit
      })
    );

    return (
      <div>
          <div className="content">
            <div>
              <ul id="nav-side" className="side-nav fixed" style={{transform: "translateX(0%)"}}>
                <ul className="collapsible collapsible-accordion">
                  <li className="bold active">
                    <a className="collapsible-header active waves-effect waves-brown FDbrownDark">
                      <span className="FDblueText">{this.state.fullName}</span>
                    </a>
                    <div className="collapsible-body" style={{display: "block"}}>
                      <ul>
                        <li><a href="update/password">Update Password</a></li>
                        <li><a href="" onClick={this.handleLogout}>Log Out</a></li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <ul className="fa-ul">
                  <li className="sideNavBtn" data-value='0' id="Welcome"><a id='0' href="Welcome">Welcome</a></li>
                  <li className="sideNavBtn" data-value='1' id="SignatureFDEmployeeHandbook"><a id='1' href="SignatureFDEmployeeHandbook">Employee Handbook</a></li>
                  <li className="sideNavBtn" data-value='2' id="SignatureFDReceiptAcknowledgement-EmployeeHandbook"><a id='2' href="SignatureFDReceiptAcknowledgement-EmployeeHandbook">Handbook Receipt Acknowledgement</a></li>
                  <li className="sideNavBtn" data-value='3' id="BenefitsGuideSigFD2017"><a id='3' href="BenefitsGuideSigFD2017">Benefits Guide</a></li>
                  <li className="sideNavBtn" data-value='4' id="401kBeneficiaryDesignationForm"><a id='4' href="401kBeneficiaryDesignationForm">401k Beneficiary Designation Form</a></li>
                  <li className="sideNavBtn" data-value='5' id="401kDirectionofInvestmentForm"><a id='5' href="401kDirectionofInvestmentForm">401k Direction of Investment Form</a></li>
                  <li className="sideNavBtn" data-value='6' id="401kSalaryDeferralAgreement"><a id='6' href="401kSalaryDeferralAgreement">401k Salary Deferral Agreement</a></li>
                  <li className="sideNavBtn" data-value='7' id="CellNumberandFirmDirectory-InformationRequest"><a id='7' href="CellNumberandFirmDirectory-InformationRequest">Firm Directory Information Request</a></li>
                  <li className="sideNavBtn" data-value='8' id="DependantCareApplication"><a id='8' href="DependantCareApplication">Dependant Care Application</a></li>
                  <li className="sideNavBtn" data-value='9' id="DependantCareFacilityStatement2017"><a id='9' href="DependantCareFacilityStatement2017">Dependant Care Statement</a></li>
                  <li className="sideNavBtn" data-value='10' id="DependentCareAssistancePlan"><a id='10' href="DependentCareAssistancePlan">Dependent Care Assistance Plan</a></li>
                  <li className="sideNavBtn" data-value='11' id="DirectDepositForm"><a id='11' href="DirectDepositForm">Direct Deposit Form</a></li>
                  <li className="sideNavBtn" data-value='12' id="FormG4"><a id='12' href="FormG4">G-4 Form</a></li>
                  <li className="sideNavBtn" data-value='13' id="FormW4"><a id='13' href="FormW4">W-4 Form</a></li>
                  <li className="sideNavBtn" data-value='14' id="i-9-paper-version"><a id='14' href="i-9-paper-version">I9 Form</a></li>
                  <li className="sideNavBtn" data-value='15' id="Lazparkingcontract-SignatureFD"><a id='15' href="Lazparkingcontract-SignatureFD">Laz Parking Contract</a></li>
                  <li className="sideNavBtn" data-value='16' id="PulseFitnessAgreement"><a id='16' href="PulseFitnessAgreement">Pulse Fitness Agreement</a></li>
                  <li className="sideNavBtn" data-value='17' id="SignatureFDComputer&NetworkPolicyHandbook"><a id='17' href="SignatureFDComputer&NetworkPolicyHandbook">Computer & Network Policy</a></li>
                  <li className="sideNavBtn" data-value='18' id="SignatureFDInternetAccessPolicy"><a id='18' href="SignatureFDInternetAccessPolicy">Internet Access Policy</a></li>
                  <li className="sideNavBtn" data-value='19' id="SignatureFDSexualandOtherUnlawfulHarassmentPolicy"><a id='19' href="SignatureFDSexualandOtherUnlawfulHarassmentPolicy">Unlawful Harassment Policy</a></li>
                </ul>
              </ul>
            </div>
            <header>
              <div className="navbar-fixed">
                <nav className="nav-extended  FDbrownLight" role="navigation">
                  <div className="container">
                    <div className="nav-wrapper">
                      <a href="#" className="brand-logo"><img src="/assets/images/logo-white.png" /></a>
                      <a href="#" data-activates="nav-side" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                    <div>
                      <div className="row">
                        <ul className="left" style={{marginRight: "30%"}}>
                          <a id="download-btn" href="/assets/images/HandbookAcknowledgement.pdf" target="_blank"><i className="fa fa-download fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;{this.state.currentForm + ".pdf"}</a>
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
            <div id="btnRow" className="container row">
                <a className="saveBTN waves-effect waves-brown btn white-text FDblue right" href="SignatureFDComputer&NetworkPolicyHandbook" onClick={this.handleSubmit} id="submit-btn">SUBMIT</a>
            </div>
          </div>
        <footer className="page-footer FDbrownLight white-text">
          <div className="container">
            <div className="row">
              <div className="col l5 s12">
                <img src="/assets/images/logo-white.png"/>
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
                <a href="http://www.signaturefd.com/privacy"> Privacy</a> |
                <a href="http://www.signaturefd.com/disclosure-information"> Disclosure</a>&nbsp;&nbsp;&nbsp;</span>
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