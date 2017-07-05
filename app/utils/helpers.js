var axios = require("axios");

var helper = {
  getData: function() {
    var email = "user@gmail.com"
    return axios.get("/data",email).then(function(data) {
      console.log("axios results", data);
      return data;
    });
  },

  postData: function(data) {
    var newData = {
      data: data,
      email: "user@gmail.com"
    };
    return axios.post("/data", newData).then(function(res) {
      console.log("axios results", res);
      return res;
    });
  }
};

module.exports = helper;