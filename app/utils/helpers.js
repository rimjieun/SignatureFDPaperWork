var axios = require("axios");

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "No cookie found.";
}

var helpers = {

  authenticateUser: function(data) {
    var credentials = data;
    return axios.post("/auth/login", credentials).then(function(res) {
      if (res.data.success === true) {
        if (res.data.authorization === "employee") {
          return "employee";
        } else {
          return "admin";
        }
      } else {
        return res.data.message;
      }
    });
  },

  validateEmpAccessToken: function() {
    var empAccessToken = getCookie("empAccessToken");

    console.log(empAccessToken);

    return axios.get("/update/password").then(function(res) {
      return res;
    });
  },

  updatePassword: function(data) {
    return ("poop");
  },

  getEmployeeData: function() {
    return axios.get("/data").then(function(data) {
      return data;
    });
  },

  postEmployeeData: function(data) {
    var newData = {
      data: data,
      dummyEmail: "user@signaturefd.com"
    };
    return axios.post("/data", newData);
  }
};

module.exports = helpers;