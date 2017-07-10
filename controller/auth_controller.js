var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
var path = require("path");
var User = require("./../models/user");
var Admin = require("./../models/admin");
var tokenSecret = "abcdefghijklmnopqrstuvwxyz";

authRouter.post("/login", function(req, res, next) {

  // var baseURL = "http://www.signaturefd.herokuapp.com/";

  // var baseURL = "http://localhost:3000/";

  console.log(req.body.email, req.body.password);

  User.findOne({"EmailAddress": req.body.email}, function(error1, doc) {

    if (error1) {
      res.send({ success: false, message: error1 });
    }

    if (doc) {
      bcrypt.compare(req.body.password, doc.Password, function(err, valid) {
        if (err || !valid) {
          res.send({ success: false, message: "Invalid username or password." });
        } else {
          var jwtAuthToken = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
              userId: doc._id,
              username: doc.EmailAddress
            }
          }, tokenSecret);

          res.cookie('employeePassToken', jwtAuthToken, {
            secure: process.env.NODE_ENV === 'production',
            signed: true
          });

          res.send({ success: true, message: "Employee login successful.", authorization: "employee" });
        }
      });
    } else {

      Admin.findOne({"EmailAddress": req.body.email}, function(error2, doc) {

        if (error2) {
          res.send({ success: false, message: error2 });
        }

        if (doc) {
          bcrypt.compare(req.body.password, doc.Password, function(err, valid) {
            if (err || !valid) {
              res.send({ success: false, message: "Invalid username or password." });
            } else {

              var jwtAuthToken = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                data: {
                  userId: doc._id,
                  username: doc.EmailAddress
                }
              }, tokenSecret);

              res.cookie('adminAuthToken', jwtAuthToken, {
                secure: process.env.NODE_ENV === 'production',
                signed: true
              });
              res.send({ success: true, message: "Admin login successful.", authorization: "admin" });
            }
          });
        } else {
          res.send({ success: false, message: "You are neither an employee nor an admin." });
        }
      });
    }
  });
});














// // Add use to database...
// authRouter.post("/updatePassword", function(req, res) {

//   // Generate salt in 10 rounds
//   bcrypt.genSalt(10, function(err, salt) {

//     // If error, render register page with error status
//     if (err) {
//       console.log("there is an error");
//       res.render("register", {
//         status: "Unable to create username with password provided."
//       });

//       // If no error...
//     } else {

//       // Hash password and create user
//       bcrypt.hash(req.body.password, salt, function(err, hash) {
//         // ******store user password in mongodb******
//         //
//         //
//         //
//         //
//         //
//       });
//     }
//   });
// });





module.exports = authRouter;