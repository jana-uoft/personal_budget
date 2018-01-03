import React, { Component } from 'react';
import { connect } from "react-redux";
import Login from '../components/authentication/Login';
import logo from '../assets/images/logo.svg';


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

  constructor(props) {
    super(props);
    this.state = {
      component: 'login',
    }
  }


  componentDidMount() {
    const token = this.props.location.search.split('=')[1];
    if (token) {
      if (this.props.location.pathname.includes("confirmation")){
        this.props.confirm(token);
        if (this.props.user.authenticated) this.props.logoutUser();
      } else if (this.props.location.pathname.includes("password")) {
        this.toggleComponent('resetPassword')
      }
    } else {
      if (this.props.user.authenticated) {
        this.props.history.push('/dashboard');
      }
    }
  }


  toggleComponent = (component) => {
    this.setState({ component })
  }


  render() {
    let content;
    switch(this.state.component){
      case 'login':
        content = <Login user={this.props.user} toggleComponent={this.toggleComponent} login={this.props.login} resendConfirmation={this.props.resendConfirmation} history={this.props.history} />;
        break;
      default:
        break;
    }
    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1vw', paddingTop: '20vh', }}>
        <img src={logo} className="logo" alt="logo" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{content}</div>
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