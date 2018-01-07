import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      passwordError: "",
    };
  }


  onInputChange(value, type) {
    this.setState({[type]: value});
  }


  submit = (e) => {
    e.preventDefault();
    if (this.state.password!=="" && this.state.passwordConfirm!=="" && this.state.password!==this.state.passwordConfirm)
      this.setState({passwordError: "Password and Confirmation Password doest not match."});
    else
      this.props.register(this.state);
  }




  render() {
    let login;
    if (this.props.notification.type==="ERROR" && this.props.notification.message.includes("taken"))
      login = <FlatButton label="Login With This Email" onClick={()=>this.props.toggleComponent('login', {email: this.state.email, password: this.state.password})} />;
    else if (this.props.notification.type==="SUCCESS")
      this.props.toggleComponent('welcome');

    let content = (
      <form onSubmit={this.submit}>
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "email")} name="email" type="email" floatingLabelText="E-mail" required />
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "password")} name="password" type="password" floatingLabelText="Password" required errorText={this.state.passwordError}/>
        <TextField fullWidth onChange={(e,v)=>this.onInputChange(v, "passwordConfirm")} name="passwordConfirm" type="password" floatingLabelText="Password Confirmation" required/>
        <br /><br />
        <RaisedButton label="Register" type="submit" name="submit" primary fullWidth/>
        <br />
        <FlatButton label="Go back" onClick={()=>this.props.toggleComponent('welcome')} />
        <br />
        {login}
      </form>
    );



    return (content);
  }
}

export default Register;
