var React = require("react");

var helpers = require("../../utils/helpers");

var Fitness = React.createClass({

  getInitialState: function() {
    return {
      Date: "",
      FirstName: "Mike",
      Employer: "Jane",
      SuiteAddress: "",
      OfficePhone: "",
      Gender: "",
      EmailAddress: "",
      EmergencyContact: "",
      EmergencyContactRelationshipAndContact: ""
    };
  },

  componentDidMount: function() {
    console.log(JSON.stringify(this.state, null, 2));
    helpers.getData().then(function(userData) {
      this.setState({
        Date: userData.Date,
        FirstName: userData.FirstName,
        Employer: userData.Employer,
        SuiteAddress: userData.SuiteAddress,
        OfficePhone: userData.OfficePhone,
        Gender: userData.Gender,
        EmailAddress: userData.EmailAddress,
        EmergencyContact: userData.EmergencyContact,
        EmergencyContactRelationshipAndContact: userData.EmergencyContactRelationshipAndContact
      });
    });
  },

  componentDidUpdate: function() {
    console.log(JSON.stringify(this.state, null, 2));
  },

  handleDateChange: function(e) {
    this.setState({ Date: e.target.value });
  },

  handleFirstNameChange: function(e) {
    this.setState({ FirstName: e.target.value });
  },

  handleEmployerChange: function(e) {
    this.setState({ Employer: e.target.value });
  },

  handleSuiteAddressChange: function(e) {
    this.setState({ SuiteAddress: e.target.value });
  },

  handleOfficePhoneChange: function(e) {
    this.setState({ OfficePhone: e.target.value });
  },

  handleGenderChange: function(e) {
    this.setState({ Gender: e.target.value });
  },

  handleEmailAddressChange: function(e) {
    this.setState({ EmailAddress: e.target.value });
  },

  handleEmergencyContactChange: function(e) {
    this.setState({ EmergencyContact: e.target.value });
  },

  handleEmergencyContactRelationshipAndContactChange: function(e) {
    this.setState({ EmergencyContactRelationshipAndContact: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state, null, 2));
    helpers.postData(this.state).then(function() {
      console.log("Submit handled successfully.");
    });
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <input name="Date" type="date"
            className="date absolute"
            style={{
              top: "13.3%",
              left: "49%",
              width: "20%",
              height: "2%"}} />
          <img className="page" src="assets/images/PulseFitnessAgreement_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="assets/images/PulseFitnessAgreement_2.jpeg" alt="" />
        </div>
        <div className="input-field">
          <input id="name" name="FirstName"
            className="absolute" type="text"
            style={{
              top: "28.2%",
              left: "52.8%",
              width: "30%",
              height: "2%"}}
            value={this.state.FirstName.trim()}
            onChange={this.handleFirstNameChange} />
          <input id="employer"  name="Employer"
            className="absolute" type="text"
            style={{
              top: "32.95%",
              left: "55%",
              width: "28%",
              height: "2%"}}
            value={this.state.Employer.trim()}
            onChange={this.handleEmployerChange} />
          <input id="suiteAddress" name="SuiteAddress"
            className="absolute" type="text"
            style={{
              top: "36%",
              left: "57%",
              width: "25%",
              height: "2%"}}
            value={this.state.SuiteAddress.trim()}
            onChange={this.handleSuiteAddressChange} />
          <input id="officePhone" name="OfficePhone"
            className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}}
            value={this.state.OfficePhone.trim()}
            onChange={this.handleOfficePhoneChange} />
          <input id="gender" name="Gender"
            className="absolute" type="text"
            style={{
              top: "41.4%",
              left: "78.2%",
              width: "4.7%",
              height: "2%"}}
            value={this.state.Gender.trim()}
            onChange={this.handleGenderChange} />
          <input id="email"  name="EmailAddress"
            className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}}
            value={this.state.EmailAddress.trim()}
            onChange={this.handleEmailAddressChange} />
          <input type="date" name="Date"
            className="date absolute"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}}
            value={this.state.Date.trim()}
            onChange={this.handleDateChange} />
          <input id="emergencyContact" name="EmergencyContact"
            className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}}
            value={this.state.EmergencyContact}
            onChange={this.handleEmergencyContactChange} />
          <input id="emergencyContactRelationship&Phone" name="EmergencyContactRelationshipAndContact"
            className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}}
            value={this.state.EmergencyContactRelationshipAndContact}
            onChange={this.handleEmergencyContactRelationshipAndContactChange} />
          <img className="page" src="assets/images/PulseFitnessAgreement_3.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="assets/images/PulseFitnessAgreement_4.jpeg" alt="" />
        </div>
        <div className="container">
          <input className="saveBTN waves-effect waves-brown btn white-text right" type="submit"></input>
        </div>
      </form>
    );
  }
});

module.exports = Fitness;