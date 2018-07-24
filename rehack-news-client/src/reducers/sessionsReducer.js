import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function sessionsReducer(state = initialState.session, action) {
  switch(action.type) {
    case types.LOG_IN_SUCCESS:
      this.context.history.push('/')
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
