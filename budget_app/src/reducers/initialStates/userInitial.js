export const initialState = {
  authenticated: false,
  token: "",
  errors: {
    login: {errorMessage: ""},
    register: {email: "", password: ""},
    confirmation: "",
  }
}