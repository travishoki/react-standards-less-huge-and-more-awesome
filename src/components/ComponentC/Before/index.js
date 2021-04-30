import React, { useState } from 'react';

/* ---------- BEFORE ---------- */

const ComponentC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [optionValue, setOptionValue] = useState('a');

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

export default ComponentC;
