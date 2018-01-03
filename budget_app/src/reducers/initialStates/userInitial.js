export const initialState = {
  authenticated: false,
  token: "",
  messages: {
    login: {success: "", failure: ""},
    register: {success: "", failure: ""},
    confirmation: {success: "", failure: ""},
    resendConfirmation: {success: "", failure: ""},
    requestResetPassword: {success: "", failure: ""},
    resetPassword: {success: "", failure: ""}
  }
}