import React, { useState } from 'react';

const SelectField = () => {
  const [optionValue, setOptionValue] = useState('a');

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

export default SelectField;
