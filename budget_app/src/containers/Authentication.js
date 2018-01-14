import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../assets/images/logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import Welcome from '../components/authentication/Welcome';
import Login from '../components/authentication/Login';
import ResendConfirmation from '../components/authentication/ResendConfirmation';
import RequestPasswordReset from '../components/authentication/RequestPasswordReset';
import Register from '../components/authentication/Register';




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
      component: 'welcome',
      componentProps: {}
    }
  }


  componentDidMount() {
    const token = this.props.location.search.split('=')[1];
    if (this.props.user.authenticated)
      this.props.history.push("/dashboard");
    if (token) {
      if (this.props.location.pathname.includes("confirmation")){
        this.props.confirm(token);
        if (this.props.user.authenticated) this.props.logoutUser();
      } else if (this.props.location.pathname.includes("password")) {
        this.toggleComponent('resetPassword')
      }
    }
    if (this.props.user.authenticated) this.props.history.push('/dashboard');
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.message!=="" && nextProps.notification.message!==this.props.notification.message) {
      toast.dismiss();
      toast(nextProps.notification.message, {
        type: toast.TYPE[nextProps.notification.type], 
        position: toast.POSITION.TOP_CENTER, 
        onClose: nextProps.clearNotification,  
        autoClose: nextProps.notification.type==="SUCCESS" ? 10000 : false 
      });
    }
    if (nextProps.user.authenticated) this.props.history.push('/dashboard');
  }



  toggleComponent = (component, componentProps) => {
    this.setState({ component, componentProps });
  }


  render() {


    let content;
    switch(this.state.component){
      case 'login':
        content = (
          <Login 
            toggleComponent={this.toggleComponent} 
            componentProps={this.state.componentProps || {}}
            login={this.props.login} 
            notification={this.props.notification}
          />
        );
        break;
      case 'resendConfirmation':
        content = (
          <ResendConfirmation 
            toggleComponent={this.toggleComponent} 
            componentProps={this.state.componentProps || {}}
            resendConfirmation={this.props.resendConfirmation} 
          />
        );
        break;
      case 'requestResetPassword':
        content = (
          <RequestPasswordReset 
            toggleComponent={this.toggleComponent} 
            componentProps={this.state.componentProps || {}}
            requestResetPassword={this.props.requestResetPassword} 
          />
        );
        break;
      case 'register':
        content = (
          <Register 
            toggleComponent={this.toggleComponent} 
            componentProps={this.state.componentProps || {}}
            register={this.props.register} 
            notification={this.props.notification}
          />
        );
        break;
      default:
        content = (<Welcome toggleComponent={this.toggleComponent} />);
        break;
    }

    let footer = (
      <p style={{color: "#FFF", bottom: "0%", position: "absolute", zIndex: '-1'}}>
        <a href="https://www.jana19.org/" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "inherit"}}>© Jana Rajakumar</a>
      </p>
    );

    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1vw', paddingTop: '10vh' }}>
        <ToastContainer/>
        <img src={logo} className="logo" alt="logo" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          {content}
          {footer}
        </div>
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