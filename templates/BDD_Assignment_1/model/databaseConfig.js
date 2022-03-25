var mysql = require('mysql');
var dbconnect = {
  getConnection: function () {
    var conn = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root@1234",
      database: "assignment1"
    });
    return conn;
  }
}
module.exports = dbconnect;