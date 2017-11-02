import { combineReducers } from 'redux';
import { selectedGroup, search } from './group';
import user from './user';
import messages from './messages';

const rootReducer = combineReducers({
  selectedGroup,
  user,
  messages,
  search
});

export default rootReducer;
