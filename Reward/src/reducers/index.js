import {combineReducers} from 'redux';
import {saveUserDataReducer} from './setUser';
import {saveMarektDataReducer} from './setMarket';
const rootReducer = combineReducers({
  saveUserDataReducer,
  saveMarektDataReducer,
});

export default rootReducer;
