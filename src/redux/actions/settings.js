import { SET_SETTINGS } from '../../constants/action-types';

export function setSettings(settings) {
    return (dispatch) => {
      dispatch({
        type: SET_SETTINGS,
        settings,
      });
    };
  }