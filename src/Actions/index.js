export const ADD_MOVIES = "ADD_MOVIES";
export const FAV_MOVIES = "FAV_MOVIES";

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
