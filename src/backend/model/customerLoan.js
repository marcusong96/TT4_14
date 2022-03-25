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
  createLoan: (customerId, loanId, loan_amount, callback) => {
    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "INSERT INTO `customerLoan` (`CustomerId`, `LoanId`) VALUES (?,?)";
        conn.query(sqlStr, [customerId, loanId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[createLoan] error');
            return callback(err, null);
          } else {
            console.log('[createLoan] result: ' + customerId);
            var sqlStr = "INSERT INTO `loan` (`LoanId`, `loan_amount`) VALUES (?,?)";
            conn.query(sqlStr, [loanId, loan_amount], (err, result) => {
              conn.end();
              if (err) {
                console.log('[createLoan] error');
                return callback(err, null);
              } else {
                console.log('[createLoan] result: ' + customerId);
                return callback(null, result);
              }
            });
            return callback(null, result);
          }
        });
      }
    })
  },

}

module.exports = customerLoanDB;
