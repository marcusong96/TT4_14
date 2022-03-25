/* Compulsory Imports */
import React, { useState, useEffect } from 'react';

/* Stylesheets Imports */
import '../styles/app.css';

/* Components Imports */
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import Favourites from './pages/Favourites';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const [favourites, setFavourites] = useState([]);
  const [alert, setAlert] = useState({ variant: '', message: '' });
  const [isAlertShown, setIsAlertShown] = React.useState(false);

  useEffect(() => {
    const localStorageItems = JSON.parse(localStorage.getItem('favourites_list'));
    if (localStorageItems !== null) {
      setFavourites(localStorageItems);
    } else {
      setFavourites([]);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('favourites_list', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {

    if (favourites.length === 0) {
      const newFavouriteList = [...favourites, movie];
      setAlert({ variant: 'success', message: movie.Title + ' has been added to favourites!' });
      setIsAlertShown(true);
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
      return
    } else {
      // check if movie exists in favourites list
      var isMovieInFav = false;
      for (let i = 0; i < favourites.length; i++) {
        if (favourites[i].imdbID === movie.imdbID) {
          isMovieInFav = true;
        }
      }

      if (isMovieInFav) {
        setAlert({ variant: 'warning', message: movie.Title + ' has already been added to favourites!' });
        setIsAlertShown(true);
      } else {
        const newFavouriteList = [...favourites, movie];
        setAlert({ variant: 'success', message: movie.Title + ' has been added to favourites!' });
        setIsAlertShown(true);
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      }
    }
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setAlert({ variant: 'danger', message: movie.Title + ' has been removed from favourites!' });
    setIsAlertShown(true);
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home isAlertShown={isAlertShown} alert={alert} setIsAlertShown={setIsAlertShown} favourites={favourites} addFavouriteMovie={addFavouriteMovie} removeFavouriteMovie={removeFavouriteMovie} />} />
          <Route path=":id" element={<MovieDetail />} />
          <Route path="about" element={<About />} />
          <Route path="favourites" element={<Favourites isAlertShown={isAlertShown} alert={alert} setIsAlertShown={setIsAlertShown} title={'Favourites'} favourites={favourites} setFavourites={setFavourites} removeFavouriteMovie={removeFavouriteMovie} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;