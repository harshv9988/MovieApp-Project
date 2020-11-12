import { ADD_MOVIES } from "../Actions/index";
import { FAV_MOVIES } from "../Actions/index";

const initialState = {
  list: [],
  favourites: [],
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

    default: {
      return state;
    }
  }
}
