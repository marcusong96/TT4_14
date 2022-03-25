/* Compulsory Imports */
import React, { useState, useEffect } from 'react'

/* Stylesheets Imports */

/* Components Imports */
import MovieCard from './MovieCard';
const axios = require('axios');


function MovieList(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovieList(props.title);
  }, []);

  // Helper function from 
  // https://www.geeksforgeeks.org/how-to-make-javascript-wait-for-a-api-request-to-return/
  function makeGetRequest(UrlPath) {
    return new Promise(function (resolve, reject) {
      axios.get(UrlPath).then(
        (response) => {
          var result = response.data;
          console.log('Processing Request');
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async function getMovieList(movieTitle) {
    var result = await makeGetRequest('http://www.omdbapi.com/?apikey=dad468bd&s=' + movieTitle);
    var resultArr = result.Search;
    console.log(resultArr.length);

    for (let i = 0; i < resultArr.length; i++) {
      let imdbID = resultArr[i].imdbID;
      var movieInfo = await makeGetRequest('http://www.omdbapi.com/?apikey=dad468bd&i=' + imdbID)
      resultArr[i].Genre = movieInfo.Genre;
      console.log(i + ': ' + movieInfo.Genre);
    }
    setMovies(resultArr);
    console.log('end')

  }

  return (
    <div className="my-4">
      <div id="movielist_title">
        <h1>{props.title}</h1>
      </div>
      <div className="my-2" id="movielist_container">
        <div className="d-flex flex-row flex-nowrap" id="scroller_container" >
          {movies.length > 0 ? movies.map((movie, index) => (
            <MovieCard movie={movie} handleFavouritesClick={props.handleFavouritesClick} cardType={'movie'} index={index} key={index} />
          )) : <p>No Movies were found!</p>}
        </div>
      </div>
    </div>
  )
}

export default MovieList;
