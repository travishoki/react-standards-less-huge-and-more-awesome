import React from 'react';
import PropTypes from 'prop-types';

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
  isButtonActive: PropTypes.bool.isRequired,
  setIsButtonActive: PropTypes.func.isRequired,
};

export default ButtonField;
