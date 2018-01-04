import { initialState } from './initialStates/globalInitial';
import { cloneDeep } from 'lodash';


export default function userReducer(state=initialState, action) {
  state = cloneDeep(state);

  switch(action.type) {
    case 'SHOW_NOTIFICATION':
      state.notification = action.payload;
      break;
    case 'CLEAR_NOTIFICATION':
      state.notification = initialState.notification;
      break;
    default:
      break;
  }
  return state;
}
