import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class RequestPasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.componentProps.email || ""
    };
  }


  onChange(value, type) {
    this.setState({[type]: value});
  }


  submit = (e) => {
    e.preventDefault();
    this.props.requestResetPassword(this.state.email);
  }


  render() {
    let form = (
      <form aria-label="resend confirmation" onSubmit={this.submit}>
        <TextField fullWidth value={this.state.email} onChange={(e,v)=>this.onChange(v,"email")} name="email" type="email" floatingLabelText="E-mail" required />
        <br /><br />
        <RaisedButton label="Request Password Reset" type="submit" name="submit" primary fullWidth />
      </form>
    );

    return (
      <div>
        {form}
        <br/ >
        <FlatButton default onClick={()=>this.props.toggleComponent('login')} label="Go back" />
      </div>
    );
  }
}

export default RequestPasswordReset;
