var React = require("react");

var Fitness = React.createClass({
  render: function() {
    return (
      <form action= "/Fitness" method ="post">
        <div className="input-field">
          <input type="date" name = "Date" className="date absolute" style={{top: "13.3%", left: "49%", width: "20%", height: "2%"}} />
          <img className="page" src="assets/images/PulseFitnessAgreement_1.jpeg" alt="" />
        </div>
        <div>
          <img className="page" src="assets/images/PulseFitnessAgreement_2.jpeg" alt="" />
        </div>
        <div className="input-field">
          <input id="name" name= "FirstName" className="absolute" type="text"
            style={{
              top: "28.2%",
              left: "52.8%",
              width: "30%",
              height: "2%"}} />
          <input id="employer"  name = "Employer" className="absolute" type="text"
            style={{
              top: "32.95%",
              left: "55%",
              width: "28%",
              height: "2%"}} />
          <input id="suiteAddress" name = "SuiteAddress" className="absolute" type="text"
            style={{
              top: "36%",
              left: "57%",
              width: "25%",
              height: "2%"}} />
          <input id="officePhone" name ="OfficePhone" className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}} />
          <input id="gender" name = "Gender" className="absolute" type="text"
            style={{
              top: "41.4%",
              left: "78.2%",
              width: "4.7%",
              height: "2%"}} />
          <input id="email"  name = "EmailAddress" className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}} />
          <input type="date" name = "Date" className="date absolute"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}} />
          <input id="emergencyContact" name= "EmergencyContact" className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}} />
          <input id="emergencyContactRelationship&Phone" name= "EmergencyContactRelationshipAndContact" className="absolute" type="text"
            style={{
              top: "13.5%",
              left: "50%",
              width: "20%",
              height: "2%"}} />
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