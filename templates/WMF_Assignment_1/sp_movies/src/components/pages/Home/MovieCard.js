/* Compulsory Imports */
import React from 'react'
import { Link } from 'react-router-dom'

/* Stylesheets Imports */

/* Components Imports */

function FavText(props) {
  const cardType = props.cardType;
  var CardText;
  var CardSvg;

  if (cardType === 'movie') {
    CardText = () => (
      <span className="mx-2">Add to Favourites</span>
    )
    CardSvg = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
      </svg>
    )

  } else if (cardType === 'favourite') {
    CardText = () => (
      <span className="mx-2">Remove From Favourites</span>
    )
    CardSvg = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-octagon-fill" viewBox="0 0 16 16">
        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
      </svg>
    )
  }

  return (
    <>
      <CardText />
      <CardSvg />
    </>
  )
}

function MovieCard(props) {

  return (
    <div className="d-flex align-items-center mx-3" id="image_container" >
      <Link to={`/${props.movie.imdbID}`} state={{
        movie: props.movie,
        index: props.index
      }}>
        <img className="rounded" src={props.movie.Poster} alt={props.movie.Title} />
      </Link>

      <div className="d-flex align-items-center justify-content-center" id="image_text" onClick={() => {
        props.handleFavouritesClick(props.movie);
      }}>
        <FavText cardType={props.cardType} />
      </div>
    </div>
  )
}

export default MovieCard;
