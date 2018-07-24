import {combineReducers} from 'redux';
import saves from './savesReducer';
import session from './sessionsReducer';

const rootReducer = combineReducers({
  saves: saves,
  session: session
})

export default rootReducer;
