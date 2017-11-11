import { combineReducers } from 'redux';
import { selectedGroup, search, groups } from './group';
import user from './user';
import messages from './messages';
import error from './error';

const rootReducer = combineReducers({
  selectedGroup,
  user,
  messages,
  search,
  groups,
  error
});

export default rootReducer;
