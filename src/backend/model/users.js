var dbConnection = require('./databaseConfig.js');

var usersDB = {
  login: (email, password, callback) => {
    console.log('[login] called');
    console.log('[login] email: ' + email);
    console.log('[login] password: ' + password);

    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error: ' + err);

        return callback(err, null, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM users WHERE email = ? AND password = ?"
        conn.query(sqlStr, [email, password], (err, result) => {
          if (err) {
            conn.end()
            console.log('[login] error');
            return callback(err, null, null);
          } else {
            console.log('[login] success');
            var customerSQL = "SELECT * FROM customer where UserId = ?";
            conn.query(customerSQL, [result[0].UserId], (errCust, resultCust) => {
              conn.end()
              if(errCust) {
                console.log('[customer] Retrieve customer info not found');
                return callback(errCust, null, null);
              }
              else 
              {
                return callback(null, resultCust, result);
              }
            })
          }
        })
      }
    })
  }
}

module.exports = usersDB;