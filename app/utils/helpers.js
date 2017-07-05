var axios = require("axios");

var helper = {
  getData: function() {
    return axios.get("/data").then(function(data) {
      console.log("axios results", data);
      return data;
    });
  },

  postData: function(data) {
    return axios.post("/data", data).then(function(res) {
      console.log("axios results", response.data._id);
      return response.data._id;
    });
  }
};

module.exports = helper;