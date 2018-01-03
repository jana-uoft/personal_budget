export function login(session) {
  return { 
    type: 'LOGIN',
    payload: {
      request : {
        url: `/session`,
        method: 'post',
        data: { session }
      }
    }
  };
}


export function register(user) {
  return { 
    type: 'REGISTER',
    payload: {
      request : {
        url: `/registration`,
        method: 'post',
        data: {user}
      }
    }
  };
}


export function confirm(confirmation_token) {
  return { 
    type: 'CONFIRM',
    payload: {
      request : {
        url: `/confirmation`,
        method: 'put',
        data: { confirmation_token }
      }
    }
  };
}


export function resendConfirmation(email) {
  return {
    type: 'RESEND_CONFIRMATION',
    payload: {
      request : {
        url: `/confirmation`,
        method: 'post',
        data: {
          confirmation: {
            email: email
          }
        }
      }
    }
  }
}


export function logout() {
  return { 
    type: 'LOGOUT',
    payload: {
      request : {
        url: `/session`,
        method: 'delete'
      }
    }
  };
}


export function requestResetPassword(email) {
  return { 
    type: 'REQUEST_PASSWORD_RESET',
    payload: {
      request : {
        url: `/password`,
        method: 'post',
        data: {password: { email }}
      }
    }
  };
}


export function resetPassword(reset_password_token, password) {
  return { 
    type: 'PASSWORD_RESET',
    payload: {
      request : {
        url: `/password`,
        method: 'put',
        data: {reset_password_token, password}
      }
    }
  };
}


export function deleteAccount(userID) {
  return { 
    type: 'DELETE_ACCOUNT',
    payload: {
      request : {
        url: `/users/${userID}`,
        method: 'delete'
      }
    }
  };
}
