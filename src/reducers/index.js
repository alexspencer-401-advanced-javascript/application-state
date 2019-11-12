import { combineReducers } from 'redux';
import moods from './moodsReducer';
import gameplay from './gamePlayReducer';

export default combineReducers({
  moods,
  gameplay
});
