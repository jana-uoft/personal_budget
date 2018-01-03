import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


class ResendConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      email: props.email,
      submitted: false,
    };
  }


  onChange(value, type) {
    this.setState({[type]: value});
  }


  resendConfirmation = () => {
    this.props.resendConfirmation(this.state.email);
    this.setState({submitted:true, message: "An email confirmation has been resent to " + this.state.email});
  }


  render() {
    let form, successButton;

    if (this.props.user.messages.resendConfirmation.success) {
      form = (
        <form aria-label="resend confirmation" onSubmit={this.submit}>
          <p>{this.props.user.messages.resendConfirmation.success}</p>
          <TextField fullWidth value={this.state.email} onChange={(e,v)=>this.onChange(v,"email")} name="email" floatingLabelText="E-mail" />
          <br /><br />
          <RaisedButton label="Resend confirmation email" primary fullWidth onClick={this.resendConfirmation} />
          <RaisedButton default fullWidth label="Okay" onClick={()=>this.props.toggleComponent('login')} />
        </form>
      );
    } else {
      successButton = <FlatButton default onClick={()=>this.props.toggleComponent('login')} label="Go back" />;
    }

    return (
      <div>
        {form}
        {successButton}
      </div>
    );
  }
}

export default ResendConfirmation;
