import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];  

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};

const Moods = ({ count, face, actions, handleSelection }) => {

  const mappedActions = actions.map(action => ({
    ...action,
    count: count[action.stateName]
  }));

  return (
    <>
      <Controls actions={mappedActions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  );
};

const mapStateToProps = state => ({
  count: {
    coffees: state.coffees,
    snacks: state.snacks,
    naps: state.naps,
    studies: state.studies
  },
  face: getFace(state),
  actions: actions
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({
      type: name
    });
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

Moods.propTypes = {
  count: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  face: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
  handleSelection: PropTypes.func.isRequired
};

export default MoodsContainer;
