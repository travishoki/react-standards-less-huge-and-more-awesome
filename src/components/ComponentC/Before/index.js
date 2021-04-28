import React, { useState } from 'react';

const ComponentC = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [selectValue, setSelectValue] = useState('a');

  const handleButtonClick = () => {
    setIsButtonActive(!isButtonActive);
  };

  const handleSelectionChange = (event) => {
    const { value } = event.target;
    setSelectValue(value);
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
        value={selectValue}
        onChange={handleSelectionChange}
      >
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </select>
    </div>
  );
};

export default ComponentC;
