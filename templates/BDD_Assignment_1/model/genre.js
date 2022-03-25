var dbConnection = require('./databaseConfig.js');

var genreDB = {
  getGenreList: function (callback) {
    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      }
      else {
        console.log('[Connection] success');
        var sqlStr = 'SELECT * FROM genre';
        conn.query(sqlStr, function (err, result) {
          conn.end();
          if (err) {
            console.log('[getGenreList] error');
            return callback(err, null);
          } else {
            console.log('[getGenreList] result');
            return callback(null, result);
          }
        });
      }
    });
  },
  getGenreById: function (genre_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "SELECT * FROM genre WHERE genre_id = ?"
        conn.query(sqlStr, [genre_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getGenreById] error');
            return callback(err, null);
          } else {
            console.log('[getGenreById] result: ' + genre_id);
            return callback(null, result);
          }
        });
      }
    })
  },
  createGenre: function (name, description, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "INSERT INTO `genre` ( `name`, `description`) VALUES (?, ?)";
        conn.query(sqlStr, [name, description], (err, result) => {
          conn.end();
          if (err) {
            console.log('[createGenre] error');
            return callback(err, null);
          } else {
            console.log('[createGenre] result: ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateGenre: function (genre_id, name, description, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `genre` SET `name`= ?, `description`=? WHERE (`genre_id` = ?)";
        conn.query(sqlStr, [name, description, genre_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateGenre] error');
            return callback(err, null);
          } else {
            console.log('[updateGenre] result: ' + genre_id + ' | ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateGenreName: function (genre_id, name, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `genre` SET `name`= ? WHERE (`genre_id` = ?)";
        conn.query(sqlStr, [name, genre_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateGenreName] error');
            return callback(err, null);
          } else {
            console.log('[updateGenreName] result: ' + genre_id + ' | ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateGenreDescription: function (genre_id, description, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `genre` SET `description`= ? WHERE (`genre_id` = ?)";
        conn.query(sqlStr, [description, genre_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateGenreDescription] error');
            return callback(err, null);
          } else {
            console.log('[updateGenreDescription] result: ' + genre_id + ' | ' + description);
            return callback(null, result);
          }
        });
      }
    })
  },
  deleteGenre: function (genre_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "DELETE FROM genre WHERE genre_id = ?";
        conn.query(sqlStr, [genre_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[deleteGenre] error');
            return callback(err, null);
          } else {
            console.log('[deleteGenre] result: ' + genre_id);
            return callback(null, result);
          }
        });
      }
    })
  }
};

module.exports = genreDB;
