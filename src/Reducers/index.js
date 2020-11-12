import { ADD_MOVIES } from "../Actions/index";

const initialState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
