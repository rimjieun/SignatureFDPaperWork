$("#login-btn").on("click", function() {
  
  $.get("/reactIndex", function(data) {
    console.log("success");
  });

});