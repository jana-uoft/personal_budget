import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ResendConfirmation from './ResendConfirmation';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }



  componentDidUpdate() {
    if (this.props.user.authenticated) {
      this.props.history.push("/dashboard");
    }
  }


  onInputChange(value, type) {
    this.setState({[type]: value});
  }


  submit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  }




  render() {
    let content = (
      <form onSubmit={this.submit}>
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "email")} name="email" type="email" floatingLabelText="E-mail" required />
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "password")} name="password" type="password" floatingLabelText="Password" required />
        <br />
        <br />
        <RaisedButton label="Login" type="submit" name="submit" primary fullWidth />
        <FlatButton label="Go back" onClick={()=>this.props.toggleComponent('login')} />
        <FlatButton label="Forgot password?" onClick={()=>this.props.toggleComponent('requestPasswordReset')} />
        <br />
        <FlatButton label="Resend confirmation" onClick={()=>this.props.toggleComponent('resendConfirmation')} />
      </form>
    );

    if (this.props.notification.type==="ERROR" && this.props.notification.message.includes("unconfirmed")) {
      content = (
        <ResendConfirmation 
          resendConfirmation={this.props.resendConfirmation}
          message="Your account has not yet been activated.  Resend confirmation email?" 
          email={this.state.email}
          tapCancel={()=>this.props.toggleComponent('login')}
        />
      );
    }

    return (content);
  }
}

export default Login;
