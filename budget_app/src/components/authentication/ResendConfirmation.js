import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class ResendConfirmation extends Component {
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
    this.props.resendConfirmation(this.state.email);
  }


  render() {
    let form = (
      <form aria-label="resend confirmation" onSubmit={this.submit}>
        <TextField fullWidth value={this.state.email} onChange={(e,v)=>this.onChange(v,"email")} name="email" type="email" floatingLabelText="E-mail" required />
        <br /><br />
        <RaisedButton label="Resend confirmation email" type="submit" name="submit" primary fullWidth />
      </form>
    );

    return (
      <div>
        {form}
        <br/ >
        <FlatButton default onClick={()=>this.props.toggleComponent('login')} label="Go Back" />
      </div>
    );
  }
}

export default ResendConfirmation;
