import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '../ListItem';

const List = ({ items }) => {
  if (!items.length) return null;

  return items.map((item) => (
    <ListItem
      key={item.id}
      name={item.name}
    />
  ));
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })),
};

List.defaultProps = {
  items: [],
};

export default List;
