import React from 'react';
import PropTypes from 'prop-types';

function Tag({ tag }) {
  return (
    <p>{tag}</p>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
};

Tag.defaultProps = {
  tag: 'Produto',
};

export default Tag;
