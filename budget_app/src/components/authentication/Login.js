import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.componentProps.email || "",
      password: props.componentProps.password || "",
    };
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
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "email")} name="email" type="email" floatingLabelText="E-mail" required value={this.state.email}/>
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "password")} name="password" type="password" floatingLabelText="Password" required value={this.state.password}/>
        <br /><br />
        <RaisedButton label="Login" type="submit" name="submit" primary fullWidth />
        <FlatButton label="Go back" onClick={()=>this.props.toggleComponent('welcome')} />
        <FlatButton label="Forgot password?" onClick={()=>this.props.toggleComponent('requestResetPassword', {email: this.state.email})} />
        <br />
        <FlatButton label="Resend confirmation" onClick={()=>this.props.toggleComponent('resendConfirmation', {email: this.state.email})} />
      </form>
    );

    if (this.props.notification.type==="ERROR" && this.props.notification.message.includes("confirmed"))
      this.props.toggleComponent('resendConfirmation', {email: this.state.email})

    return (content);
  }
}

export default Login;
