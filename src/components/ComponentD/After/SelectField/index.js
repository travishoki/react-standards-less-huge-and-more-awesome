import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  getOptionValue,
} from '../../../../redux/selectors/settings';
import * as reduxActions from '../../../../redux/actions/settings';

const SelectField = ({
  optionValue,
  setOptionValue,
}) => {
  const handleSelectionChange = (event) => {
    const { value } = event.target;
    setOptionValue(value);
  };

  return (
    <select
      value={optionValue}
      onChange={handleSelectionChange}
    >
      <option value="a">Option A</option>
      <option value="b">Option B</option>
    </select>
  );
};

SelectField.propTypes = {
  optionValue: PropTypes.arrayOf.isRequired,
  setOptionValue: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    optionValue: getOptionValue(state),
  };
}

function mapDispatchToProps(dispatch) {
  const { setOptionValue } = reduxActions;
  const actions = {
    setOptionValue,
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectField);
