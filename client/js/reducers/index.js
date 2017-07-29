import { combineReducers } from 'redux';
import selectedGroup from './selectedGroup';
import userData from './user';
import messages from './messages';

const rootReducer = combineReducers({
  selectedGroup,
  userData,
  messages
});

export default rootReducer;
