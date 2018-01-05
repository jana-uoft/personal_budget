import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../assets/images/logo.svg';
import Login from '../components/authentication/Login';
import ResendConfirmation from '../components/authentication/ResendConfirmation';
import { ToastContainer, toast } from 'react-toastify';


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


  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.message!=="" && this.props.notification.message!==nextProps.notification.message && nextProps.notification.type!=="SUCCESS") 
      toast(nextProps.notification.message, {type: toast.TYPE[nextProps.notification.type], position: toast.POSITION.BOTTOM_CENTER, onClose: ()=>this.props.clearNotification() });
  }

  toggleComponent = (component) => {
    this.setState({ component }, ()=>this.props.clearNotification());
  }


  render() {
    let content;
    switch(this.state.component){
      case 'login':
        content = (
          <Login 
            user={this.props.user} 
            notification={this.props.notification}
            toggleComponent={this.toggleComponent} 
            login={this.props.login} 
            resendConfirmation={this.props.resendConfirmation} 
            history={this.props.history}
          />
        );
        break;
      case 'resendConfirmation':
        content = (
          <ResendConfirmation 
            user={this.props.user} 
            notification={this.props.notification}
            toggleComponent={this.toggleComponent} 
            resendConfirmation={this.props.resendConfirmation} 
            clearNotification={this.props.clearNotifications}
          />
        );
        break;
      default:
        break;
    }
    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1vw', paddingTop: '20vh', }}>
        <ToastContainer autoClose={false}/>
        <img src={logo} className="logo" alt="logo" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{content}</div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.global.notification
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
    },
    clearNotification: () => {
      dispatch({type: "CLEAR_NOTIFICATION"});
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);