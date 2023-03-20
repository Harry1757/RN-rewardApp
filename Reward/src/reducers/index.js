import {combineReducers} from 'redux';
import {inputReducer} from './input';
import {uerDataSaveReducer} from './login';
const rootReducer = combineReducers({
  inputReducer,
  uerDataSaveReducer,
});

export default rootReducer;
