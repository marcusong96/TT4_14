const dbConnection = require('../model/databaseConfig');
const express = require('express');
const usersDB = require('../model/users');
var app = express();
const jwt = require('jsonwebtoken');
const secretKey = '1234566789';
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);

app.use(express.json());

/* Middlewares */
app.use((req, res, next) => {
  if (!req.header("email") & !req.header("password")) {
    res.status(403).send({ message: "Please set email and password in headers" });
  } else if (!req.header("password")) {
    res.status(403).send({ message: "Please set password in headers" });
  } else if (!req.header("email")) {
    res.status(403).send({ message: "Please set email in headers" });
  } else {
    var email = req.header("email");
    var password = req.header("password");
    // console.log('[app header] email: ' + email);
    // console.log('[app header] password: ' + password);

    usersDB.login(email, password, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (!result[0]) {
          res.status(403).send({ message: "Wrong email/password" });
        } else {
          // console.log('[app] admin logged in');
          // req.role = result[0].role;
          next();
        }
      }
    });
  }
})


module.exports = app;