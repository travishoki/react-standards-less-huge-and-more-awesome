import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  getIsButtonActive,
  getOptionValue,
} from '../../../redux/selectors/settings';
import * as reduxActions from '../../../redux/actions/settings';

const ComponentD = ({
  isButtonActive,
  optionValue,
  setIsButtonActive,
  setOptionValue,
}) => {
  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  const handleSelectionChange = (event) => {
    const { value } = event.target;

    setOptionValue(value);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        type="button"
      >
        Toggle
        {' '}
        {isButtonActive ? 'Active' : 'Inactive'}
      </button>

      <select
        value={optionValue}
        onChange={handleSelectionChange}
      >
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </select>
    </div>
  );
};

ComponentD.propTypes = {
  isButtonActive: PropTypes.bool.isRequired,
  optionValue: PropTypes.string.isRequired,
  setIsButtonActive: PropTypes.func.isRequired,
  setOptionValue: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isButtonActive: getIsButtonActive(state),
    optionValue: getOptionValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  const { setIsButtonActive, setOptionValue } = reduxActions;
  const actions = {
    setIsButtonActive,
    setOptionValue,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentD);
