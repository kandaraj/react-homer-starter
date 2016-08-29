import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import user from './agreementReducer';
import metaData from './metaDataReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  user,
  metaData
});

export default rootReducer;
