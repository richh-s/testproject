// reducer.js
import { TOGGLE_POPUP, TOGGLE_HOME_POSTER, TOGGLE_GAME_POSTER } from '../action';
const initialState = {
  isGamePosterVisible: true,
  isHomePosterVisible: true,
  isPopupVisible: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_POPUP':
      return { ...state, isPopupVisible: !state.isPopupVisible };
    case 'TOGGLE_GAME_POSTER':
      return { ...state, isGamePosterVisible: !state.isGamePosterVisible };
    case 'TOGGLE_HOME_POSTER':
      return { ...state, isHomePosterVisible: !state.isHomePosterVisible };
    default:
      return state;
  }
};

export default reducer;
