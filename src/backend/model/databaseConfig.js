var mysql = require('mysql');
var dbconnect = {
  getConnection: function () {
    var conn = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "potato1234",
      database: "loan_management"
    });
    return conn;
  }
}
module.exports = dbconnect;