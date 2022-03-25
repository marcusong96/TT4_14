/* Compulsory Imports */
import React from 'react'

/* Stylesheets Imports */
import '../../styles/home.css';

/* Components Imports */
import MovieList from './Home/MovieList';
import FavouriteList from './Home/FavouriteList';
import AlertMessage from './Home/AlertMessage';
import { Container } from 'react-bootstrap';


function Home(props) {

  return (
    <Container id="home_container" fluid>
      <AlertMessage isAlertShown={props.isAlertShown} alert={props.alert} setIsAlertShown={props.setIsAlertShown} />

      <MovieList title={'Avengers'} handleFavouritesClick={props.addFavouriteMovie} />
      <MovieList title={'Star Wars'} handleFavouritesClick={props.addFavouriteMovie} />
      <MovieList title={'Harry Potter'} handleFavouritesClick={props.addFavouriteMovie} />
      <MovieList title={'John Wick'} handleFavouritesClick={props.addFavouriteMovie} />
      <FavouriteList title={'Favourites'} favourites={props.favourites} handleFavouritesClick={props.removeFavouriteMovie} />
    </Container>
  )
}

export default Home;
