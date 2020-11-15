import { ADD_MOVIES } from "../Actions/index";
import { FAV_MOVIES } from "../Actions/index";
import { REMOVE_MOVIES } from "../Actions/index";
import { SET_SHOW_FAVOURITES } from "../Actions/index";

const initialState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export default function movies(state = initialState, action) {
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

    default: {
      return state;
    }
  }
}
