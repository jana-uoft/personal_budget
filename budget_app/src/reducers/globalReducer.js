import { initialState } from './initialStates/globalInitial';
import { cloneDeep } from 'lodash';


export default function globalReducer(state=initialState, action) {
  state = cloneDeep(state);
  let errorMessage;

  switch(action.type) {
    case 'SHOW_NOTIFICATION':
      state = action.payload;
      break;
    case 'LOGIN_FAIL':
      state.notification.type = 'ERROR';
      errorMessage = action.error.response.data.errors.session[0];
      state.notification.message = errorMessage.includes('unconfirmed') ? "The email you have entered is not yet confirmed." : "The email or password you have entered is invalid.";
      break;
    case 'RESEND_CONFIRMATION_SUCCESS':
      state.notification.type = 'SUCCESS';
      state.notification.message = "Please check your email for the confirmation link."
      break;
    case 'RESEND_CONFIRMATION_FAIL':
      state.notification.type = 'ERROR';
      errorMessage = action.error.response.data.errors.email[0];
      state.notification.message = errorMessage.includes('confirmed') ? "The email provided has already been confirmed." : "An account associated with this email does not exist.";
      break;
    case 'REQUEST_RESET_PASSWORD_SUCCESS':
      state.notification.type = 'SUCCESS';
      state.notification.message = "Please check your email for the reset password link."
      break;
    case 'REQUEST_RESET_PASSWORD_FAIL':
      state.notification.type = 'ERROR';
      errorMessage = action.error.response.data.errors.email[0];
      state.notification.message = errorMessage.includes('unconfirmed') ? "The email you have entered is not yet confirmed." : "An account associated with this email does not exist.";
      break;
    case 'REGISTER_SUCCESS':
      state.notification.type = 'SUCCESS';
      state.notification.message = "Please check your email for the account confirmation link."
      break;
    case 'REGISTER_FAIL':
      state.notification.type = 'ERROR';
      errorMessage = action.error.response.data.errors.email[0];
      state.notification.message = errorMessage.includes('taken') ? "The email you have entered is already taken." : "The email address provided is invalid.";
      break;
    case 'CLEAR_NOTIFICATION':
      state = initialState;
      break;
    case 'RESIZE':
      state.mobileView = action.payload;
      break;
    default:
      break;
  }
  return state;
}
