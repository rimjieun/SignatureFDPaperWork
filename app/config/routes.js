var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var IndexLayout = require("../components/layouts/indexLayout");
var Login = require("../components/pages/Login");
var UpdatePwd = require("../components/pages/UpdatePwd");
var Admin = require("../components/pages/Admin");

var EmployeeLayout = require("../components/layouts/employeeLayout");
var Welcome = require("../components/forms/Welcome");
var SignatureFDEmployeeHandbook = require("../components/forms/SignatureFDEmployeeHandbook");
var PulseFitnessAgreement = require("../components/forms/PulseFitnessAgreement");
var kBeneficiaryDesignationForm = require("../components/forms/401kBeneficiaryDesignationForm");
var kDirectionofInvestmentForm = require("../components/forms/401kDirectionofInvestmentForm");
var kSalaryDeferralAgreement = require("../components/forms/401kSalaryDeferralAgreement");
var BenefitsGuideSigFD2017 = require("../components/forms/BenefitsGuideSigFD2017");
var CellNumberandFirmDirectoryInformationRequest = require("../components/forms/CellNumberandFirmDirectory-InformationRequest");
var DependantCareApplication = require("../components/forms/DependantCareApplication");
var DependantCareFacilityStatement2017 = require("../components/forms/DependantCareFacilityStatement2017");
var DependentCareAssistancePlan = require("../components/forms/DependentCareAssistancePlan");
var DirectDepositForm = require("../components/forms/DirectDepositForm");
var FormG4 = require("../components/forms/FormG4");
var FormW4 = require("../components/forms/FormW4");
var i9paperversion = require("../components/forms/i-9-paper-version");
var LazparkingcontractSignatureFD = require("../components/forms/Lazparkingcontract-SignatureFD");
var SignatureFDComputerNetworkPolicyHandbook = require("../components/forms/SignatureFDComputer&NetworkPolicyHandbook");
var SignatureFDInternetAccessPolicy = require("../components/forms/SignatureFDInternetAccessPolicy");
var SignatureFDReceiptAcknowledgementEmployeeHandbook = require("../components/forms/SignatureFDReceiptAcknowledgement-EmployeeHandbook");
var SignatureFDSexualandOtherUnlawfulHarassmentPolicy = require("../components/forms/SignatureFDSexualandOtherUnlawfulHarassmentPolicy");



module.exports = (
  <Router history={hashHistory}>
    <Route component={IndexLayout}>
      <Route path="/" component={Login} />
      <Route path="update/password" component={UpdatePwd} />
      <Route path="admin" component={Admin} />
    </Route>
    <Route component={EmployeeLayout}>
      <Route path="employee/welcome" component={Welcome} />
      <Route path="employee/PulseFitnessAgreement" component={PulseFitnessAgreement} />
      <Route path="employee/SignatureFDEmployeeHandbook" component={SignatureFDEmployeeHandbook} />
        <Route path="employee/401kBeneficiaryDesignationForm" component={kBeneficiaryDesignationForm} />
        <Route path="employee/401kDirectionofInvestmentForm" component={kDirectionofInvestmentForm} />
        <Route path="employee/401kSalaryDeferralAgreement" component={kSalaryDeferralAgreement} />
        <Route path="employee/BenefitsGuideSigFD2017" component={BenefitsGuideSigFD2017} />
        <Route path="employee/CellNumberandFirmDirectory-InformationRequest" component={CellNumberandFirmDirectoryInformationRequest} />
        <Route path="employee/DependantCareApplication" component={DependantCareApplication} />
        <Route path="employee/DependantCareFacilityStatement2017" component={DependantCareFacilityStatement2017} />
        <Route path="employee/DependentCareAssistancePlan" component={DependentCareAssistancePlan} />
        <Route path="employee/DirectDepositForm" component={DirectDepositForm} />
        <Route path="employee/FormG4" component={FormG4} />
        <Route path="employee/FormW4" component={FormW4} />
        <Route path="employee/i-9-paper-version" component={i9paperversion} />
        <Route path="employee/Lazparkingcontract-SignatureFD" component={LazparkingcontractSignatureFD} />
        <Route path="employee/SignatureFDComputer&NetworkPolicyHandbook" component={SignatureFDComputerNetworkPolicyHandbook} />
        <Route path="employee/SignatureFDInternetAccessPolicy" component={SignatureFDInternetAccessPolicy} />
        <Route path="employee/SignatureFDReceiptAcknowledgement-EmployeeHandbook" component={SignatureFDReceiptAcknowledgementEmployeeHandbook} />
        <Route path="employee/SignatureFDSexualandOtherUnlawfulHarassmentPolicy" component={SignatureFDSexualandOtherUnlawfulHarassmentPolicy} />
    </Route>
    
  </Router>
);

// <Route path="*" component={Not Found}/>