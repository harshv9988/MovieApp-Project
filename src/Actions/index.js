export const ADD_MOVIES = "ADD_MOVIES";
export const FAV_MOVIES = "FAV_MOVIES";
export const REMOVE_MOVIES = "REMOVE_MOVIES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

export function addFavourites(movie) {
  return {
    type: FAV_MOVIES,
    movie: movie,
  };
}

export function removeFavourites(movie) {
  return {
    type: REMOVE_MOVIES,
    movie: movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val: val,
  };
}

export function handleMovieSearch(movie) {
  const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        //dispatch an action
        // dispatch ({type: 'ADD_SEARCH_RESULT', movie})
        //  dispatch(addMovieSearchResult(movie));
      });
  };
}
