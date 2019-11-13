export const getCoffeesCount = state => state.moods.coffees;
export const getSnacksCount = state => state.moods.snacks;
export const getNapsCount = state => state.moods.naps;
export const getStudiesCount = state => state.moods.studies;

export const isTired = state => state.moods.coffees < 1 && state.moods.naps < 1;
export const isHyper = state => state.moods.coffees > 3;
export const isEducated = state => state.moods.studies > 2;
export const isHungry = state => state.moods.snacks < 1;

export const getFace = state => {
  if(isTired(state) && isHungry(state)) return '🤬';
  if(isHyper(state) && isHungry(state)) return '🤮';
  if(isTired(state)) return '😴';
  if(isHyper(state)) return '🙀';
  if(isEducated(state)) return '🤯';
  if(isHungry(state)) return '😡';

  return '😀';
};
