import { initialState } from './initialStates/userInitial';

export default function userReducer(state=initialState, action) {
  try {
    if (action.error) {
      if (action.error.status===0 || action.error.response.status===400 || action.error.response.status===401) return initialState;
      action = {type: action.type, payload: action.error.response.data};
    }
  } catch (e) {}

  switch(action.type) {
    default:
      break;
  }
  return state;
}
