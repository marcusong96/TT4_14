var dbConnection = require('./databaseConfig.js');

var customerDB = {
  getCustomer: (customerId, callback) => {
    console.log('[getCustomer] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM customer WHERE customerId = ?"
        conn.query(sqlStr, [customerId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getCustomer] error');
            return callback(err, null);
          } else {
            console.log('[getCustomer] success');
            return callback(null, result);
          }
        })
      }
    })
  },
  getCustomerList: (callback) => {
    console.log('[getCustomerList] called');

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM customer"
        conn.query(sqlStr, [customerId], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getCustomerList] error');
            return callback(err, null);
          } else {
            console.log('[getCustomerList] success');
            return callback(null, result);
          }
        })
      }
    })
  }
}

module.exports = customerDB;