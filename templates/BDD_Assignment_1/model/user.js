var dbConnection = require('./databaseConfig.js');

var userDB = {
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

        var sqlStr = "SELECT * FROM user WHERE email = ? AND password = ?"
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
  },
  getUserList: function (callback) {
    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      }
      else {
        console.log('[Connection] success');
        var sqlStr = 'SELECT * FROM user';
        conn.query(sqlStr, function (err, result) {
          conn.end();
          if (err) {
            console.log('[getUserList] error');
            return callback(err, null);
          } else {
            console.log('[getUserList] result');
            return callback(null, result);
          }
        });
      }
    });
  },
  getUserById: function (user_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "SELECT * FROM user WHERE user_id = ?"
        conn.query(sqlStr, [user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getUserById] error');
            return callback(err, null);
          } else {
            console.log('[getUserById] result: ' + user_id);
            return callback(null, result);
          }
        });
      }
    })
  },
  createUser: function (email, name, role, password, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "INSERT INTO `user` (`email`, `name`, `role`, `password`) VALUES (?, ?, ?, ?)";
        conn.query(sqlStr, [email, name, role, password], (err, result) => {
          conn.end();
          if (err) {
            console.log('[createUser] error');
            return callback(err, null);
          } else {
            console.log('[createUser] result: ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateUser: function (user_id, email, name, role, password, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `user` SET `email`= ?, `name`=?, `role`=?, `password`=? WHERE (`user_id` = ?)";
        conn.query(sqlStr, [email, name, role, password, user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateUser] error');
            return callback(err, null);
          } else {
            console.log('[updateUser] result: ' + user_id + ' | ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateUserEmail: function (user_id, email, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `user` SET `email`= ? WHERE (`user_id` = ?)";
        conn.query(sqlStr, [email, user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateUserEmail] error');
            return callback(err, null);
          } else {
            console.log('[updateUserEmail] result: ' + user_id + ' | ' + email);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateUserName: function (user_id, name, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `user` SET `name`= ? WHERE (`user_id` = ?)";
        conn.query(sqlStr, [name, user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateUserName] error');
            return callback(err, null);
          } else {
            console.log('[updateUserName] result: ' + user_id + ' | ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateUserRole: function (user_id, role, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `user` SET `role`= ? WHERE (`user_id` = ?)";
        conn.query(sqlStr, [role, user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateUserRole] error');
            return callback(err, null);
          } else {
            console.log('[updateUserRole] result: ' + user_id + ' | ' + role);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateUserPassword: function (user_id, password, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `user` SET `password`= ? WHERE (`user_id` = ?)";
        conn.query(sqlStr, [password, user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateUserPassword] error');
            return callback(err, null);
          } else {
            console.log('[updateUserPassword] result: ' + user_id + ' | ' + password);
            return callback(null, result);
          }
        });
      }
    })
  },
  deleteUser: function (user_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "DELETE FROM user WHERE user_id = ?";
        conn.query(sqlStr, [user_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[deleteUser] error');
            return callback(err, null);
          } else {
            console.log('[deleteUser] result: ' + user_id);
            return callback(null, result);
          }
        });
      }
    })
  }
};
//var sqlStr = "UPDATE `carmart`.`customer` SET `title` = ?, `first_name` = ?, `last_name` = ?, `email` = ?, `password` = ?, `dob` = ?, `active` = ? WHERE (`customer_id` = ?);";

module.exports = userDB;
