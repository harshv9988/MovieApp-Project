import {
  ADD_MOVIES,
  FAV_MOVIES,
  REMOVE_MOVIES,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
} from "../Actions/index";
import { combineReducers } from "redux";

const initialState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialState, action) {
  // if (action.type === ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case FAV_MOVIES:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_MOVIES:
      const fav = state.favourites.filter(
        (item) => item.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: fav,
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    default: {
      return state;
    }
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default: {
      return state;
    }
  }
}

// const initialRootState = {
//   movies: initialState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies: movies,
  search: search,
});
