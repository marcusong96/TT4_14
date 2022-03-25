/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */

/* Components Imports */
import MovieCard from './MovieCard';

function FavouriteList(props) {

  return (
    <div className="my-4">
      <div id="movielist_title">
        <h1>{props.title}</h1>
      </div>
      <div className="my-2" id="movielist_container">
        <div className="d-flex flex-row flex-nowrap" id="scroller_container" >
          {props.favourites.length > 0 ?
            props.favourites.map((movie, index) => (
              <MovieCard movie={movie} handleFavouritesClick={props.handleFavouritesClick} cardType={'favourite'} index={index} key={index} />
            )) : <p>No Favourites were added!</p>}
        </div>
      </div>
    </div>
  )
}

export default FavouriteList;
