import { combineReducers } from 'redux';
import selectedGroup from './selectedGroup';
import userData from './user';

const rootReducer = combineReducers({
  selectedGroup,
  userData
});

export default rootReducer;
