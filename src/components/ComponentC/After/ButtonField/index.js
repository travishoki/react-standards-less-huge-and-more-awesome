import React, { useState } from 'react';

const ButtonField = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

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

export default ButtonField;
