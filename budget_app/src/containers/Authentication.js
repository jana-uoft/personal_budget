import React, { Component } from 'react';
import { connect } from "react-redux";


import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import { 
  login, 
  register, 
  confirm, 
  resendConfirmation,
  requestResetPassword, 
  resetPassword,
  logout
} from "../actions/userActions";



class Authentication extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Budget App</h1>
        </header>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    },
    register: (user) => {
      dispatch(register(user));
    },
    confirm: (confirmation_token) => {
      dispatch(confirm(confirmation_token));
    },
    resendConfirmation: (email) => {
      dispatch(resendConfirmation(email));
    },
    requestResetPassword: (email) => {
      dispatch(requestResetPassword(email));
    },
    resetPassword: (reset_token, password) => {
      dispatch(resetPassword(reset_token, password));
    },
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);