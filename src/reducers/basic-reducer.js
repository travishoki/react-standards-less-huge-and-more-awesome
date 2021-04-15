import _ from 'lodash';

const SET_SETTINGS = 'SET_SETTINGS';

const defaultState = {
  settings: {},
};

export function setSettings(settings) {
  return (dispatch) => {
    dispatch({
      type: SET_SETTINGS,
      settings,
    });
  };
}

export function basicReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ..._.cloneDeep(state),
        settings: action.settings,
      };

    default:
      return state;
  }
}

export function getSettings(state) {
  return _.get(state, 'settings');
}
