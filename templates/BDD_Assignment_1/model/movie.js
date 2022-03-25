const dbConnection = require('./databaseConfig.js');

var movieDB = {
  getMovieList: function (callback) {
    var conn = dbConnection.getConnection();
    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      }
      else {
        console.log('[Connection] success');
        var sqlStr = 'SELECT * FROM movie';
        conn.query(sqlStr, function (err, result) {
          conn.end();
          if (err) {
            console.log('[getMovieList] error');
            return callback(err, null);
          } else {
            console.log('[getMovieList] result');
            return callback(null, result);
          }
        });
      }
    });
  },
  getMovieById: function (movie_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "SELECT * FROM movie WHERE movie_id = ?";
        conn.query(sqlStr, [movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getMovieById] error');
            return callback(err, null);
          } else {
            console.log('[getMovieById] result: ' + movie_id);
            return callback(null, result);
          }
        });
      }
    })
  },
  createMovie: function (name, description, release_date, image_url, genre_id, insert_date, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "INSERT INTO `movie` (`name`, `description`, `release_date`, `image_url`, `genre_id`, `insert_date`) VALUES (?, ?, ?, ?, ?, ?)";
        conn.query(sqlStr, [name, description, release_date, image_url, genre_id, insert_date], (err, result) => {
          conn.end();
          if (err) {
            console.log('[createMovie] error');
            return callback(err, null);
          } else {
            console.log('[createMovie] result: ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovie: function (movie_id, name, description, release_date, image_url, genre_id, insert_date, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `name`= ?, `description`=?, `release_date`=?, `image_url`=?, `genre_id`=?, `insert_date`=? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [name, description, release_date, image_url, genre_id, insert_date, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovie] error');
            return callback(err, null);
          } else {
            console.log('[updateMovie] result: ' + movie_id + ' | ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovieName: function (movie_id, name, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `name`= ? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [name, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovieName] error');
            return callback(err, null);
          } else {
            console.log('[updateMovieName] result: ' + movie_id + ' | ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovieDescription: function (movie_id, description, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `description`= ? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [description, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovieDescription] error');
            return callback(err, null);
          } else {
            console.log('[updateMovieDescription] result: ' + movie_id + ' | ' + description);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovieReleaseDate: function (movie_id, release_date, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `release_date`= ? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [release_date, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovieReleaseDate] error');
            return callback(err, null);
          } else {
            console.log('[updateMovieReleaseDate] result: ' + movie_id + ' | ' + release_date);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovieImageUrl: function (movie_id, image_url, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `image_url`= ? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [image_url, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovieImageUrl] error');
            return callback(err, null);
          } else {
            console.log('[updateMovieImageUrl] result: ' + movie_id + ' | ' + image_url);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovieGenre: function (movie_id, genre_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `genre_id`= ? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [genre_id, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovieGenre] error');
            return callback(err, null);
          } else {
            console.log('[updateMovieGenre] result: ' + movie_id + ' | ' + genre_id);
            return callback(null, result);
          }
        });
      }
    })
  },
  updateMovieInsertDate: function (movie_id, insert_date, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "UPDATE `movie` SET `insert_date`= ? WHERE (`movie_id` = ?)";
        conn.query(sqlStr, [insert_date, movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[updateMovieInsertDate] error');
            return callback(err, null);
          } else {
            console.log('[updateMovieInsertDate] result: ' + movie_id + ' | ' + insert_date);
            return callback(null, result);
          }
        });
      }
    })
  },
  deleteMovie: function (movie_id, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "DELETE FROM movie WHERE movie_id = ?";
        conn.query(sqlStr, [movie_id], (err, result) => {
          conn.end();
          if (err) {
            console.log('[deleteMovie] error');
            return callback(err, null);
          } else {
            console.log('[deleteMovie] result: ' + movie_id);
            return callback(null, result);
          }
        });
      }
    })
  },
  getMovieByName: function (name, callback) {
    var conn = dbConnection.getConnection();

    conn.connect(function (err) {
      if (err) {
        console.log('[Connection] error');
        console.log(err);
        return callback(err, null);
      } else {
        console.log('[Connection] success');
        var sqlStr = "SELECT * FROM movie WHERE name LIKE ? ORDER BY release_date";
        name = '%' + name + '%'
        conn.query(sqlStr, [name], (err, result) => {
          conn.end();
          if (err) {
            console.log('[getMovieByName] error');
            return callback(err, null);
          } else {
            console.log('[getMovieByName] result: ' + name);
            return callback(null, result);
          }
        });
      }
    })
  },

};

module.exports = movieDB;
