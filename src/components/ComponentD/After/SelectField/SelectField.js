import React from 'react';
import PropTypes from 'prop-types';

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
  optionValue: PropTypes.string.isRequired,
  setOptionValue: PropTypes.func.isRequired,
};

export default SelectField;
