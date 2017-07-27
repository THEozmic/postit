import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, itemDeleteItem } from './items';

export default combineReducers({
  items,
  itemsHasErrored,
  itemsIsLoading,
  itemDeleteItem
});
