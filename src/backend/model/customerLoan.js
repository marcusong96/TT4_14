var dbConnection = require('./databaseConfig.js');

var customerLoanDB = {
  getCustomerLoan: (customerId, loanId) => {
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
  getCustomerLoanList: () => {
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

}

module.exports = customerLoanDB;