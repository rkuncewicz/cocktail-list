import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cocktails from '../features/cocktail-app/duck';

export default combineReducers({
  routing: routerReducer,
  cocktails,
});
