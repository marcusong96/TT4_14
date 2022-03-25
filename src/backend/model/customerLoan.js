var dbConnection = require('./databaseConfig.js');

var customerLoanDB = {
  getCustomerLoan: (customerId, loanId, callback) => {
    console.log('[getCustomerLoan] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM customerloan WHERE customerId = ? AND loanId = ?"
        conn.query(sqlStr, [customerId, loanId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getCustomerLoan] error');
            return callback(err, null);
          } else {
            console.log('[getCustomerLoan] success');
            return callback(null, result);
          }
        })
      }
    })
  },
  getCustomerLoanList: (callback) => {
    console.log('[getCustomerLoanList] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM customerloan"
        conn.query(sqlStr, [customerId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getCustomerLoanList] error');
            return callback(err, null);
          } else {
            console.log('[getCustomerLoanList] success');
            return callback(null, result);
          }
        })
      }
    })
  },
  getCustomerLoanListForCustomer: (customerId, callback) => {
    console.log('[getCustomerLoanListForCustomer] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM customerloan WHERE customerId = ?"
        conn.query(sqlStr, [customerId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getCustomerLoanListForCustomer] error');
            return callback(err, null);
          } else {
            console.log('[getCustomerLoanListForCustomer] success');
            return callback(null, result);
          }
        })
      }
    })
  },
  createLoan: (customerId, loan_amount, callback) => {
    console.log('[createLoan] called');
    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "INSERT INTO `loan` (`loan_amount`) VALUES (?)";
        conn.query(sqlStr, [loan_amount], (loanErr, loanResult) => {
          // conn.end();
          if (loanErr) {
            console.log('[createLoan] insert into loan error');
            return callback(loanErr, null);
          } else {
            console.log('[createLoan] insert into loan success insertId: ', loanResult.insertId);

            var sqlStr = "INSERT INTO `customerloan` (`customerId`, `loanId`) VALUES (?,?);";

            conn.query(sqlStr, [customerId, loanResult.insertId], (customerLoanErr, customerLoanResult) => {
              // conn.end();
              if (customerLoanErr) {
                console.log('[createLoan] insert into customerloan error');
                return callback(customerLoanErr, null);
              } else {
                console.log('[createLoan] insert into customerloan success insertId: ', customerLoanResult.insertId);

                // var sqlStr = "UPDATE `customer` SET balance = (select sum(loan_amount) from loan inner join customerloan on loan.LoanId = customerloan.LoanId where CustomerId = ?) WHERE customerId = ?;";
                // conn.query(sqlStr, [customerId, customerId], (customerErr, customerResult) => {
                //   conn.end();
                //   if (customerErr) {
                //     console.log('[createLoan] update into customer error');
                //     return callback(customerErr, null);
                //   } else {
                //     console.log('[createLoan] update into customer success');
                //     //return callback(null, customerResult);
                //   }
                // });
                //return callback(null, customerLoanResult);
              }
            });
            return callback(null, loanResult);
          }
        });
      }
    })
  },
  createPayment: (loanId, payment_date, payment_amount, callback) => {
    console.log('[createPayment] called');
    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "INSERT INTO `payment` (`loanId`, `payment_date`, `payment_amount`) VALUES (?, ?, ?)"
        conn.query(sqlStr, [loanId, payment_date, payment_amount], (err, result) => {
          conn.end();
          if (err) {
            console.log('[createPayment] error');
            return callback(err, null);
          } else {
            console.log('[createPayment] success');
            return callback(null, result);
          }
        })
      }
    })
  },
  getCustomerPaymentListForCustomer: (customerId, callback) => {
    console.log('[getCustomerPaymentListForCustomer] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM payment inner join loan on loan.LoanId = payment.loanId inner join customerLoan on customerLoan.loanId = loan.LoanId where customerId = ?"
        conn.query(sqlStr, [customerId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getCustomerPaymentListForCustomer] error');
            return callback(err, null);
          } else {
            console.log('[getCustomerPaymentListForCustomer] success');
            return callback(null, result);
          }
        })
      }
    })
  },
  updateBalance: (customerId, callback) => {
    console.log('[updateBalance] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "UPDATE `customer` SET balance = (SELECT (sum(loan.loan_amount) - SUM(CAST(payment_amount AS CHAR(10)))) as balance FROM payment inner join loan on loan.LoanId = payment.loanId inner join customerLoan on customerLoan.loanId = loan.LoanId where customerId = ?) WHERE customerId = ?;"
        conn.query(sqlStr, [customerId, customerId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateBalance] error');
            return callback(err, null);
          } else {
            console.log('[updateBalance] success');
            console.log(result)
            return callback(null, result);
          }
        })
      }
    })
  }


}

module.exports = customerLoanDB;
