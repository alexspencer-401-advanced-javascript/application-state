import React, { useState } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import History from '../components/history/History';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import Timer from '../components/timer/Timer';
import styles from './Moods.css';
import { incrementState, DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY, resetGame, saveGame } from '../actions/moodsActions';
import { getCoffeesCount, getSnacksCount, getNapsCount, getStudiesCount, getFace } from '../selectors/moodsSelectors';

const actions = [
  { name: DRINK_COFFEE, text: 'Drink Coffee', stateName: 'coffees' },
  { name: EAT_SNACK, text: 'Snack', stateName: 'snacks' },
  { name: TAKE_NAP, text: 'Nap', stateName: 'naps' },
  { name: STUDY, text: 'Study', stateName: 'studies' },
];

const Moods = ({ history, count, face, actions, handleSelection, handleReset, handleSaveGame }) => {

  const [render, setRender] = useState(false);

  const mappedActions = actions.map(action => ({
    ...action,
    count: count[action.stateName]
  }));

  const handleClick = () => {
    setRender(true);
  };

  return (
    <div>
      <div className={styles.Moods}>
        <button onClick={handleClick}>Start</button>
      </div>
      {render ? (
        <>
          <button onClick={handleReset}>Reset</button>
          <button onClick={() => handleSaveGame({ count, face })}>Save Game</button>
          <Controls actions={mappedActions} handleSelection={handleSelection} />
          <Face emoji={face} />
          <Timer setRender={setRender} />
        </>
      ) : (
        console.log('Timer has not yet been initialized!')
      )}
      <History history={history} />
    </div>
  );
};

const mapStateToProps = state => ({
  count: {
    coffees: getCoffeesCount(state),
    snacks: getSnacksCount(state),
    naps: getNapsCount(state),
    studies: getStudiesCount(state)
  },
  face: getFace(state),
  actions,
  history: state.game
});

const mapDispatchToProps = dispatch => {
  return {
    handleSelection(name) {
      dispatch(incrementState(name));
    },
    handleReset() {
      dispatch(resetGame());
    },
    handleSaveGame(game) {
      dispatch(saveGame(game));
    }
  };
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

Moods.propTypes = {
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  face: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleSaveGame: PropTypes.func.isRequired,
  history: PropTypes.array.isRequired
};

export default MoodsContainer;
