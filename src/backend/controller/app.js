const dbConnection = require('../model/databaseConfig');
const express = require('express');
const usersDB = require('../model/users');
const customerDB = require('../model/customer');
const customerLoanDB = require('../model/customerLoan');


var app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const secretKey = '1234566789';
const formidable = require('express-formidable');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(formidable());
app.use(urlencodedParser);
app.use(express.json());

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
//           console.log('[main] user logged in: ', email);
//           var tokenPayLoad = { email: result[0].email, password: result[0].password };
//           var token = jwt.sign(tokenPayLoad, secretKey, { expiresIn: "1h" });
//           req.header.Authorization = token;
//           console.log('[main]', req.header.Authorization);
//           next();
//         }
//       }
//     });
//   }
// })

app.get('/get_balance', function (req, res) {
  console.log(req.fields);
  usersDB.getBalance(req.fields.customerId, function (err, result) {
    if (!err) {
      res.status(200).send({ result: result })
    }
    else {
      console.log(err);
      res.status(500).send("Some error");
    }
  });
});

app.post('/create_loan', function (req, res) {
  customerLoanDB.createLoan(req.fields.cusomterId, req.fields.loanId, function (err, result) {
    if (!err) {
      res.status(200).send({ result: result })
    }
    else {
      console.log(err);
      res.status(500).send("Some error");
    }
  });
});


module.exports = app;