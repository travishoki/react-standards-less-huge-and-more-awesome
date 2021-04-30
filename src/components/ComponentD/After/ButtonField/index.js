import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  getIsButtonActive,
} from '../../../../redux/selectors/settings';
import * as reduxActions from '../../../../redux/actions/settings';

const ButtonField = ({
  isButtonActive,
  setIsButtonActive,
}) => {
  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <button
      onClick={handleButtonClick}
      type="button"
    >
      Toggle
      {' '}
      {isButtonActive ? 'Active' : 'Inactive'}
    </button>
  );
};

ButtonField.propTypes = {
  isButtonActive: PropTypes.arrayOf.isRequired,
  setIsButtonActive: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isButtonActive: getIsButtonActive(state),
  };
}

function mapDispatchToProps(dispatch) {
  const { setIsButtonActive } = reduxActions;
  const actions = {
    setIsButtonActive,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonField);
