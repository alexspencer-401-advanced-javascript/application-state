import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ history }) => {
  const historyElements = history.map((historyItem, i) => {
    return (
      <li key={i}>
        <HistoryItem {...historyItem} />
      </li>
    );
  });

  return (
    <div>
      <h1>Game Play History:</h1>
      <ul>
        {historyElements}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired
};

export default History;
