import React from 'react';
import PropTypes from 'prop-types';

const History = ({ game }) => {
  console.log(game);

  return (
    <div>
      <p>
        {game}
      </p>
    </div>
  );
};

History.propTypes = {
  game: PropTypes.array.isRequired
};

export default History;
