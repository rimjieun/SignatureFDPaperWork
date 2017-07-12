var React = require("react");
var ReactDOM = require("react-dom");

var routes = require("./config/routes");

ReactDOM.render(routes, document.getElementById("app"));

$(window).load(function(){

    (function($){
        $(function(){
            $('.button-collapse').sideNav();
            $('.parallax').parallax();
            $('.scrollspy').scrollSpy();
        }); // end of document ready
    })(jQuery); // end of jQuery name space



    var navId = 0;
    var nextLink = 0;
    var thisLink = 0;
    var fileName;




    $('.saveBTN').on("click", function() {
        $('#'+ navId).parent().click();
        console.log("clicked");

    });

// side nav button highlight
    $('.sideNavBtn').on("click", function() {

        var self = this;
        $('.sideNavBtn').removeClass("active");
        $(self).addClass("active");
        navId = 1 + parseInt($(self).attr('data'));
        nextLink = $('#'+ navId).attr('href');
        thisLink = $('#'+ (navId - 1)).attr('href')
        console.log(navId);
        console.log(nextLink);
        fileName = " " + thisLink.substr(11) + ".pdf";
        $('.saveBTN').attr('href',nextLink);
        $('#downBtn').text(fileName);
    });


})






