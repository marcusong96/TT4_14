var mysql = require('mysql');
var dbconnect = {
  getConnection: function () {
    var conn = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "root@1234",
      database: "loan_management"
    });
    return conn;
  }
}
module.exports = dbconnect;