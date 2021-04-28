import { SET_SETTINGS } from '../../constants/action-types';

const defaultState = {
  settings: {},
};

function basicReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.settings,
      };

    default:
      return state;
  }
}

export default basicReducer;
