import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ count, face }) => {

  return (
    <>
      <p>Coffee Count: {count.coffees}</p>
      <p>Snacks Count: {count.snacks}</p>
      <p>Naps Count: {count.naps}</p>
      <p>Studies Count: {count.studies}</p>
      <p>Face: {face}</p>
    </>
  );

};

HistoryItem.propTypes = {
  count: PropTypes.shape({
    coffees: PropTypes.number.isRequired,
    snacks: PropTypes.number.isRequired,
    naps: PropTypes.number.isRequired,
    studies: PropTypes.number.isRequired
  }).isRequired,
  face: PropTypes.string.isRequired
};

export default HistoryItem;

