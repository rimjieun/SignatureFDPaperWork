var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
var path = require("path");
var User = require("./../models/user");
var tokenSecret = "abcdefghijklmnopqrstuvwxyz";

authRouter.post("/login", function(req, res, next) {

  console.log(req.body.email, req.body.password);

  User.findOne({"EmailAddress": req.body.email}, function(error, doc) {

    if (error) {
      res.send({ success: false, message: error});
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

          res.cookie('jwtAuthToken', jwtAuthToken, {
            secure: process.env.NODE_ENV === 'production',
            signed: true
          });

          res.send({ success: true, message: "Login successful." });
        }
      });
    } else {
      res.send({ success: false, message: "Invalid username or password." });
    }
  });
});


// authRouter.post("/update/password", function(req, res, next) {

// });











// // Get login page
// authRouter.get("/login", function(req, res, next) {

//   // If user is logged in, direct user to homepage
//   if (req.user) {
//     res.redirect("/");
//   // If user does not exist, render login page
//   } else {
//     res.render("login", {
//       status: "Enter your username and password."
//     });
//   }
// });

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

// // Search for existing user in database to log in
// authRouter.post("/login", function(req, res, next) {
//   db.user.findOne({
//     email: req.body.email
//   }).then(function(user) {

//     // If user does not exist, render login page with error status
//     if (!user) {
//       res.render("login", {
//         status: "Invalid username or password."
//       });
//     } else {
//       bcrypt.compare(req.body.password, user.password, function(err, valid) {
//         if (err || !valid) {
//           res.render("login", {
//             status: "Invalid username or password."
//           });
//         } else {
//           var jwtAuthToken = jwt.sign({
//             exp: Math.floor(Date.now() / 1000) + (60 * 60),
//             data: {
//               userId: user.userId
//             }
//           }, tokenSecret);

//           //...and put token in cookie
//           res.cookie("jwtAuthToken", jwtAuthToken, {
//             secure: process.env.NODE_ENV === "production",
//             signed: true
//           });
//         }
        
//       });
      
//       // If log in successful, direct user to homepage
//       res.redirect("/");
//     }
//   }).catch(next);
// });





module.exports = authRouter;