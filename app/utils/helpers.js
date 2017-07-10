var axios = require("axios");

var helpers = {

  authenticateUser: function(data) {
    var credentials = data;
    return axios.post("/auth/login", credentials);
  },

  getEmployeeData: function() {
    return axios.get("/data").then(function(data) {
      console.log("axios results", data);
      return data;
    });
  },

  postEmployeeData: function(data) {
    var newData = {
      data: data,
      dummyEmail: "user@signaturefd.com"
    };
    return axios.post("/data", newData).then(function(res) {
      return res.data;
    });
  }
};

module.exports = helpers;