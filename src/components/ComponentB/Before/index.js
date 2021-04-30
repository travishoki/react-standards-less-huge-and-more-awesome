import React, { useEffect, useState } from 'react';

import { getItemList } from '../../../api';

function renderListItem(item) {
  return (
    <li key={item.id}>{item.name}</li>
  );
}

function renderList(itemList) {
  return itemList.map((item) => renderListItem(item));
}

/* ---------- BEFORE ---------- */

const ComponentB = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItemList()
      .then((result) => {
        setItemList(result);
      });
  });

  const list = renderList(itemList);

  return (
    <div>
      List:
      {list}
    </div>
  );
};

export default ComponentB;
