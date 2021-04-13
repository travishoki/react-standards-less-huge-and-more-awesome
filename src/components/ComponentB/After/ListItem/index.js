import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({
  name,
}) => {
  if (!name) return null;

  return (
    <li>{name}</li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ListItem;
