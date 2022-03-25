const dbConnection = require('../model/databaseConfig');
const express = require('express');
const usersDB = require('../model/users');
const formidable = require('express-formidable');
const customerDB = require('../model/customer');
const customerLoanDB = require('../model/customerLoan');
var app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretKey = '1234566789';
var session = require('express-session');
const { request } = require('express');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidable());
app.set('trust proxy', 1) // trust first proxy to set to true when using proxy backend nodejs
app.use(session({
  secret: 'abcdefg',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

/* Middlewares */
// app.use((req, res, next) => {
//   if (!req.header("email") & !req.header("password")) {
//     res.status(403).send({ message: "Please set email and password in headers" });
//   } else if (!req.header("password")) {
//     res.status(403).send({ message: "Please set password in headers" });
//   } else if (!req.header("email")) {
//     res.status(403).send({ message: "Please set email in headers" });
//   } else {
//     var email = req.header("email");
//     var password = req.header("password");
//     // console.log('[app header] email: ' + email);
//     // console.log('[app header] password: ' + password);

//     usersDB.login(email, password, (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         if (!result[0]) {
//           res.status(403).send({ message: "Wrong email/password" });
//         } else {
//           // console.log('[app] admin logged in');
//           // req.role = result[0].role;
//           next();
//         }
//       }
//     });
//   }
// })

app.post('/login', (request, response) => {
  const email = request.fields.email;
  const password = request.fields.password;
  usersDB.login(email, password, (err, resultCust, result) => {
    if (err) {
      response.status(500).send(err);
    } else {
      if (!result[0]) {
        response.status(403).send({ message: "Wrong email/password" });
      } else {
        console.log('[app] admin logged in');
        req.role = result[0].role;
        request.session.userID = result[0].UserId
        request.session.customerID = resultCust[0].CustomerId
        console.log(request.session)
        response.status(200).send({ message: "Welcome " + result[0].email })
      }
    }
  });
});

function verifyToken(req, res, next) {
  var token = req.header("Authorization");
  if (!token || !token.includes("Bearer ")) {
    res.status(403).send({ "message": "Authorization Token not found" })
  } else {
    token = token.split("Bearer ")[1];
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(500).send(err);
      } else {
        req.role = decoded.role;
        next();
      }
    })
  }
}


app.get('/get_balance', function (req, res) {
  if (typeof (request.session) === 'undefined') {
    customerDB.getBalance(1, function (err, result) {
      if (!err) {
        res.status(200).send({
          message: "Balance retrieved",
          balance: balance
        })
      }
      else {
        console.log(err);
        res.status(500).send("Some error");
      }
    });
  }
  else {
    res.status(403).send({ message: "Customer Information not found or Unauthenticated" });
  }
});

app.post('/create_loan', function (req, res) {
  var { customerId, loan_amount } = req.fields;
  customerLoanDB.createLoan(customerId, loan_amount, function (err, result) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else if (result.affectedRows > 0) {
      res.status(201).send({
        message: "Loan " + result.insertId + " created.",
        customerId: customerId,
        loan_amount: loan_amount
      });
    } else {
      res.status(201).send({
        message: "No loans created"
      });
    }
  });
});

module.exports = app;