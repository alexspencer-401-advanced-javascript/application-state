import { combineReducers } from 'redux';
import moods from './moodsReducer';
import game from './gamePlayReducer';

export default combineReducers({
  moods,
  game
});
