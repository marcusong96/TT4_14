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

        return callback(err, null);
      } else {
        console.log('[Connection] success');

        var sqlStr = "SELECT * FROM users WHERE email = ? AND password = ?"
        conn.query(sqlStr, [email, password], (err, result) => {
          conn.end();
          if (err) {
            console.log('[login] error');
            return callback(err, null);
          } else {
            console.log('[login] success');
            return callback(null, result);
          }
        })
      }
    })
  }
}

module.exports = usersDB;