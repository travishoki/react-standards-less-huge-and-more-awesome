import React, { useEffect, useState } from 'react';

import List from './List';
import { getItemList } from '../../../api';

const ComponentB = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemList()
      .then((result) => {
        setItems(result);
      });
  });

  return (
    <div>
      List:
      <List items={items} />
    </div>
  );
};

export default ComponentB;
