var movieDB = require('../model/movie.js');
var genreDB = require('../model/genre.js');
var userDB = require('../model/user.js');
const dbConnection = require('../model/databaseConfig');

const express = require('express');

var app = express();

/* Middlewares */
app.use(express.json());
// User Auth
app.use((req, res, next) => {
  if (!req.header("email") & !req.header("password")) {
    res.status(403).send({ message: "Please set email and password in headers" });
  } else if (!req.header("password")) {
    res.status(403).send({ message: "Please set password in headers" });
  } else if (!req.header("email")) {
    res.status(403).send({ message: "Please set email in headers" });
  } else {
    var email = req.header("email");
    var password = req.header("password");
    // console.log('[app header] email: ' + email);
    // console.log('[app header] password: ' + password);

    userDB.login(email, password, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (!result[0]) {
          res.status(403).send({ message: "Wrong email/password" });
        } else {
          console.log('[app] admin logged in');
          req.role = result[0].role;
          next();
        }
      }
    });
  }
})

/* Admin Only API Start */
app.post("/add_movie", function (req, res) {
  if (req.role === "admin") {
    var { name, description, release_date, image_url, genre_id, insert_date } = req.body;
    movieDB.createMovie(name, description, release_date, image_url, genre_id, insert_date, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.affectedRows > 0) {
        res.status(201).send({
          message: "Movie " + result.insertId + " created.",
          movie_id: result.insertId
        });
      } else {
        res.status(201).send({
          message: "No movie created"
        });
      }
    })
  } else {
    res.status(403).send({ message: "Unauthorised to access API" });
  }
})
app.post("/add_genre", function (req, res) {
  if (req.role === "admin") {
    var { name, description } = req.body;
    genreDB.createGenre(name, description, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.affectedRows > 0) {
        res.status(201).send({
          message: "Genre " + result.insertId + " created.",
          genre_id: result.insertId
        });
      } else {
        res.status(201).send({
          message: "No genre created"
        });
      }
    })
  } else {
    res.status(403).send({ message: "Unauthorised to access API" });
  }

})
/* Admin Only API End */

/* Public API Start */
// Retrieve all active screening movies
app.get('/movie', function (req, res) {
  movieDB.getMovieList(function (err, result) {
    if (!err) {
      res.send(result);
    }
    else {
      console.log(err);
      res.status(500).send("Some error");
    }
  });
});

// Retrieve all movies based on substring of movie name
// sorted in ascending release date
app.get('/movie/list/:name', function (req, res) {
  movieDB.getMovieByName(req.params.name, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else if (result.length == 0) {
      res.send({ message: "Movies with movie name " + req.params.name + " not found" })
    } else {
      res.send(result);
    }
  });
});

// Retrieve all genre
app.get('/genre', function (req, res) {
  genreDB.getGenreList(function (err, result) {
    if (!err) {
      res.send(result);
    }
    else {
      console.log(err);
      res.status(500).send("Some error");
    }
  });
});
/* Public API End */

/* Assignment 2 */
// /* Movie API Start */
// app.get('/movie/:movie_id', function (req, res) {
//   movieDB.getMovieById(req.params.movie_id, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.length == 0) {
//       res.send({ message: "Movie with movie ID of " + req.params.movie_id + " not found" })
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/movie/:movie_id/update", function (req, res) {
//   var { name, description, release_date, image_url, genre_id, insert_date } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovie(movie_id, name, description, release_date, image_url, genre_id, insert_date, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " updated.",
//         movie_id: movie_id,
//         updated_details: req.body
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });

// app.put("/movie/:movie_id/update_name", function (req, res) {
//   var { name } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovieName(movie_id, name, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " name changed to " + name,
//         movie_id: movie_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });

// app.put("/movie/:movie_id/update_description", function (req, res) {
//   var { description } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovieDescription(movie_id, description, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " description changed to " + description,
//         movie_id: movie_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });

// app.put("/movie/:movie_id/update_release_date", function (req, res) {
//   var { release_date } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovieReleaseDate(movie_id, release_date, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " release_date changed to " + release_date,
//         movie_id: movie_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });

// app.put("/movie/:movie_id/update_image_url", function (req, res) {
//   var { image_url } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovieImageUrl(movie_id, image_url, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " image_url changed to " + image_url,
//         movie_id: movie_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });

// app.put("/movie/:movie_id/update_genre_id", function (req, res) {
//   var { genre_id } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovieGenre(movie_id, genre_id, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " genre_id changed to " + genre_id,
//         movie_id: movie_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });

// app.put("/movie/:movie_id/update_insert_date", function (req, res) {
//   var { insert_date } = req.body;
//   var movie_id = req.params.movie_id;
//   movieDB.updateMovieInsertDate(movie_id, insert_date, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Movie " + movie_id + " insert_date changed to " + insert_date,
//         movie_id: movie_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No movie updated"
//       });
//     }
//   });
// });
// /* Movie API End */

// /* Genre API Start */
// app.get('/genre/:genre_id', function (req, res) {
//   genreDB.getGenreById(req.params.genre_id, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.length == 0) {
//       res.send({ message: "Genre with genre ID of " + req.params.genre_id + " not found" })
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/genre/:genre_id/update", function (req, res) {
//   var { name, description } = req.body;
//   var genre_id = req.params.movie_id;
//   genreDB.updateGenre(genre_id, name, description, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Genre " + genre_id + " updated.",
//         genre_id: genre_id,
//         updated_details: req.body
//       });
//     } else {
//       res.status(200).send({
//         message: "No genre updated"
//       });
//     }
//   });
// });

// app.put("/genre/:genre_id/update_name", function (req, res) {
//   var { name } = req.body;
//   var genre_id = req.params.genre_id;
//   genreDB.updateGenreName(genre_id, name, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Genre " + genre_id + " name changed to " + name,
//         genre_id: genre_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No genre updated"
//       });
//     }
//   });
// });

// app.put("/genre/:genre_id/update_description", function (req, res) {
//   var { description } = req.body;
//   var genre_id = req.params.genre_id;
//   genreDB.updateGenreDescription(genre_id, description, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "Genre " + genre_id + " description changed to " + description,
//         genre_id: genre_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No genre updated"
//       });
//     }
//   });
// });
// /* Genre API End */

// /* User API Start */
// app.get('/user', function (req, res) {
//   userDB.getUserList(function (err, result) {
//     if (!err) {
//       res.send(result);
//     }
//     else {
//       console.log(err);
//       res.status(500).send("Some error");
//     }
//   });
// });

// app.get('/user/:user_id', function (req, res) {
//   userDB.getUserById(req.params.user_id, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.length == 0) {
//       res.send({ message: "User with user ID of " + req.params.user_id + " not found" })
//     } else {
//       res.send(result);
//     }
//   });
// });

// app.put("/user/:user_id/update", function (req, res) {
//   var { email, name, role, password } = req.body;
//   var user_id = req.params.user_id;
//   userDB.updateUser(user_id, email, name, role, password, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "User " + user_id + " updated.",
//         user_id: user_id,
//         updated_details: req.body
//       });
//     } else {
//       res.status(200).send({
//         message: "No user updated"
//       });
//     }
//   });
// });

// app.put("/user/:user_id/update_email", function (req, res) {
//   var { email } = req.body;
//   var user_id = req.params.user_id;
//   userDB.updateUserEmail(user_id, email, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "User " + user_id + " email changed to " + email,
//         user_id: user_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No user updated"
//       });
//     }
//   });
// });

// app.put("/user/:user_id/update_name", function (req, res) {
//   var { name } = req.body;
//   var user_id = req.params.user_id;
//   userDB.updateUserName(user_id, name, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "User " + user_id + " name changed to " + name,
//         user_id: user_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No user updated"
//       });
//     }
//   });
// });

// app.put("/user/:user_id/update_role", function (req, res) {
//   var { role } = req.body;
//   var user_id = req.params.user_id;
//   userDB.updateUserRole(user_id, role, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "User " + user_id + " name changed to " + role,
//         user_id: user_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No user updated"
//       });
//     }
//   });
// });

// app.put("/user/:user_id/update_password", function (req, res) {
//   var { password } = req.body;
//   var user_id = req.params.user_id;
//   userDB.updateUserPassword(user_id, password, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "User " + user_id + " password changed to " + password,
//         user_id: user_id
//       });
//     } else {
//       res.status(200).send({
//         message: "No user updated"
//       });
//     }
//   });
// });

// app.post("/user", (req, res) => {
//   var { email, name, role, password } = req.body;
//   userDB.createUser(email, name, role, password, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else if (result.affectedRows > 0) {
//       res.status(201).send({
//         message: "User " + result.insertId + " created.",
//         user_id: result.insertId
//       });
//     } else {
//       res.status(201).send({
//         message: "No user created"
//       });
//     }
//   })
// })
// /* User API End */

module.exports = app;