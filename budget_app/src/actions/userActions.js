export function login(session) {
  return { 
    types: 'LOGIN',
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
    types: 'REGISTER',
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
    types: 'CONFIRM',
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
    types: 'LOGOUT',
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
    types: 'REQUEST_PASSWORD_RESET',
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
    types: 'PASSWORD_RESET',
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
    types: 'DELETE_ACCOUNT',
    payload: {
      request : {
        url: `/users/${userID}`,
        method: 'delete'
      }
    }
  };
}
