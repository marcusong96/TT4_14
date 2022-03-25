/* Compulsory Imports */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
/* Stylesheets Imports */

/* Components Imports */
import Reviews from './MovieDetail/Reviews';
import AddReview from './MovieDetail/AddReview';
import Comments from './MovieDetail/Comments';
import AddComment from './MovieDetail/AddComment';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const axios = require('axios');

function MovieDetail(props) {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({
    'Title': undefined,
    'Year': undefined,
    'Rated': undefined,
    'Released': undefined,
    'Runtime': undefined,
    'Genre': undefined,
    'Director': undefined,
    'Writer': undefined,
    'Actors': undefined,
    'Plot': undefined,
    'Language': undefined,
    'Country': undefined,
    'Awards': undefined,
    'Poster': undefined,
    'Metascore': undefined,
    'imdbRating': undefined,
    'imdbVotes': undefined,
    'imdbID': undefined,
    'Type': undefined,
    'DVD': undefined,
    'BoxOffice': undefined,
    'Production': undefined,
    'Website': undefined,
    'Response': undefined
  })
  const [movieRatings, setMovieRatings] = useState([]);
  const [reviews, setReviews] = useState([
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 1",
      reviewDate: "31 December 2021",
      reviewContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ipsa assumenda rerum deserunt eos voluptates reiciendis deleniti architecto dignissimos est, doloribus quis exercitationem labore, quaerat nesciunt voluptate! Cum, beatae quas."
    },
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 2",
      reviewDate: "31 December 2021",
      reviewContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ipsa assumenda rerum deserunt eos voluptates reiciendis deleniti architecto dignissimos est, doloribus quis exercitationem labore, quaerat nesciunt voluptate! Cum, beatae quas."
    },
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 3",
      reviewDate: "31 December 2021",
      reviewContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ipsa assumenda rerum deserunt eos voluptates reiciendis deleniti architecto dignissimos est, doloribus quis exercitationem labore, quaerat nesciunt voluptate! Cum, beatae quas."
    },
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 4",
      reviewDate: "31 December 2021",
      reviewContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ipsa assumenda rerum deserunt eos voluptates reiciendis deleniti architecto dignissimos est, doloribus quis exercitationem labore, quaerat nesciunt voluptate! Cum, beatae quas."
    }
  ])
  const [comments, setComments] = useState([
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 1",
      commentDate: "31 December 2021",
      commentContent: "Lorem ipsum dolor sit. "
    },
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 2",
      commentDate: "31 December 2021",
      commentContent: "Illum ipsa assumenda rerum deserunt eos voluptates reiciendis deleniti architecto dignissimos est."
    },
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 3",
      commentDate: "31 December 2021",
      commentContent: "eiciendis deleniti architecto dignissimos est, doloribus quis exercitationem labore."
    },
    {
      imageSrc: "https://via.placeholder.com/400x200",
      name: "user 4",
      commentDate: "31 December 2021",
      commentContent: "ribus quis exercitationem labore, quaerat nesciunt voluptate! Cum, beatae quas."
    }
  ])

  useEffect(() => {
    getMovieInfo(id)
  }, []);

  const getMovieInfo = (imdb_id) => {
    let db_url = "http://www.omdbapi.com/?apikey=dad468bd"

    axios.get(db_url + "&i=" + imdb_id)
      .then(function (response) {
        console.log("[LOG] API call successful using imdb_id: '" + imdb_id + "'");
        // console.log(response.data.Ratings);
        // response.data.Ratings.map((rating) => (
        //   console.log(rating.Source + ": " + rating.Value)
        // ))
        setMovieDetails({
          'Title': response.data.Title,
          'Year': response.data.Year,
          'Rated': response.data.Rated,
          'Released': response.data.Released,
          'Runtime': response.data.Runtime,
          'Genre': response.data.Genre,
          'Director': response.data.Director,
          'Writer': response.data.Writer,
          'Actors': response.data.Actors,
          'Plot': response.data.Plot,
          'Language': response.data.Language,
          'Country': response.data.Country,
          'Awards': response.data.Awards,
          'Poster': response.data.Poster,
          'Metascore': response.data.Metascore,
          'imdbRating': response.data.imdbRating,
          'imdbVotes': response.data.imdbVotes,
          'imdbID': response.data.imdbID,
          'Type': response.data.Type,
          'DVD': response.data.DVD,
          'BoxOffice': response.data.BoxOffice,
          'Production': response.data.Production,
          'Website': response.data.Website,
          'Response': response.data.Response
        })
        setMovieRatings(response.data.Ratings)
      })
      .catch(function (error) {
        console.log('[LOG] API call failed');
        console.log(error);
      })
  }

  let navigate = useNavigate();

  return (
    <>
      <div className="mt-4 mb-4" id="moviedetails_container">
        <Container className="mb-4">
          <button className="btn btn-light" type="button" onClick={() => (navigate(-1))}>Back</button>
        </Container>
        <Container className="p-3 border border-white" >
          <div id="panel">
            <div id="panel_body">
              <Row >
                <Col className="p-3" sm={12} md={6} lg={6}>
                  <Col className="d-md-none d-lg-none text-center" sm={12}>
                    <h4>{movieDetails.Title}</h4>
                    <div>
                      <img src={movieDetails.Poster} alt={movieDetails.Title} />
                    </div>
                  </Col>

                  <h4>Director: </h4>
                  <p>{movieDetails.Director}</p>
                  <h4>Stars: </h4>
                  <p>{movieDetails.Actors}</p>
                  <h4>Genres: </h4>
                  <p>{movieDetails.Genre}</p>
                  <h4>Release: </h4>
                  <p>{movieDetails.Released}</p>
                  <h4>Rating: </h4>
                  {movieRatings.map((rating, index) => (
                    <p key={index}>{rating.Value} from {rating.Source}</p>
                  ))}
                  <h4>Story: </h4>
                  <p>{movieDetails.Plot}</p>
                </Col>
                <Col className="text-center p-3" sm={12} md={6} lg={6} >
                  <h4 >{movieDetails.Title}</h4>
                  <div>
                    <img src={movieDetails.Poster} alt={movieDetails.Title} />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <Reviews reviews={reviews} setReviews={setReviews} />
      <AddReview reviews={reviews} setReviews={setReviews} />
      <Comments comments={comments} setComments={setComments} />
      <AddComment comments={comments} setComments={setComments} />
    </>
  )
}

export default MovieDetail;
