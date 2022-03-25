/* Compulsory Imports */
import React, { useState, useEffect } from 'react';

/* Stylesheets Imports */

/* Components Imports */
import FavouriteList from './Home/FavouriteList';
import AlertMessage from './Home/AlertMessage';
import SearchBox from './Favourites/SearchBox';
import { Container } from 'react-bootstrap';


function getAllUniqueGenres(favList) {
  let uniqueGenreList = ['Select a Genre'];
  for (let i = 0; i < favList.length; i++) {
    let nonUnqiueGenreList = String(favList[i].Genre)
    let nonUniqueGenres = nonUnqiueGenreList.split(",")
    for (let i = 0; i < nonUniqueGenres.length; i++) {
      uniqueGenreList.push(nonUniqueGenres[i].trim());
    }
  }
  uniqueGenreList = [...new Set(uniqueGenreList)]
  return uniqueGenreList;
}

function Favourites(props) {
  const optionsList = getAllUniqueGenres(props.favourites);
  const [selectedOption, setSelectedOption] = useState(optionsList[0]);
  const [displayedFavourites, setDisplayedFavourites] = useState(props.favourites);

  useEffect(() => {
    setDisplayedFavourites(filterFavouritesByGenre(props.favourites, selectedOption));
  }, [props.favourites, selectedOption])

  // filter favourites by the genres selected
  function filterFavouritesByGenre(favList, selectedOption) {
    if (selectedOption === 'Select a Genre') {
      return favList
    } else {
      let filteredFavList = [];
      for (let i = 0; i < favList.length; i++) {
        let genreList = favList[i].Genre.split(",");
        let isSelectedOptionInGenre = false;
        for (let k = 0; k < genreList.length; k++) {
          if (genreList[k].trim() === selectedOption) {
            isSelectedOptionInGenre = true;
            break;
          } else {
            isSelectedOptionInGenre = false;
          }
        }
        if (isSelectedOptionInGenre) {
          filteredFavList.push(favList[i]);
        }
      }
      return filteredFavList;
    }
  }

  return (
    <>
      <AlertMessage isAlertShown={props.isAlertShown} alert={props.alert} setIsAlertShown={props.setIsAlertShown} />
      <Container className="text-center" fluid>
        <SearchBox options={optionsList} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </Container>
      <Container fluid>
        <FavouriteList title={'Favourites'} favourites={displayedFavourites} handleFavouritesClick={props.removeFavouriteMovie} />
      </Container>
    </>
  )
}

export default Favourites
