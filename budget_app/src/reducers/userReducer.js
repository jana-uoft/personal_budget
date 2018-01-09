import { initialState } from './initialStates/userInitial';
import { cloneDeep } from 'lodash';

export default function userReducer(state=initialState, action) {
  try {
    if (action.error) {
      if (action.error.status===0 || action.error.response.status===400 || action.error.response.status===401) return initialState;
      action = {type: action.type, payload: action.error.response.data};
    }
  } catch (e) {}

  state = cloneDeep(state);
  
  switch(action.type) {
    case "persist/REHYDRATE":
      if (action.payload) state = action.payload.user;
      break;
    case 'LOGIN_SUCCESS':
      state.authenticated = true;
      state.token = action.payload.jwt;
      break;
    case 'LOGOUT_SUCCESS':
      state = initialState;
      break;
    default:
      break;
  }
  return state;
}
