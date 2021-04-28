import React, { useState } from 'react';

const SelectField = () => {
  const [selectValue, setSelectValue] = useState('a');

  const handleSelectionChange = (event) => {
    const { value } = event.target;
    setSelectValue(value);
  };

  return (
    <select
      value={selectValue}
      onChange={handleSelectionChange}
    >
      <option value="a">Option A</option>
      <option value="b">Option B</option>
    </select>
  );
};

export default SelectField;
