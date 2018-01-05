import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import { toast } from 'react-toastify';


class ResendConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      email: props.email || ""
    };
  }


  onChange(value, type) {
    this.setState({[type]: value});
  }


  resendConfirmation = () => {
    this.props.resendConfirmation(this.state.email);
  }

  submit = (e) => {
    e.preventDefault();
    this.resendConfirmation(this.state.email);
  }


  render() {
    let form;
    if (this.props.notification.message==="" || this.props.notification.type==="ERROR") {
      form = (
        <form aria-label="resend confirmation" onSubmit={this.submit}>
          <TextField fullWidth value={this.state.email} onChange={(e,v)=>this.onChange(v,"email")} name="email" type="email" floatingLabelText="E-mail" required />
          <br /><br />
          <RaisedButton label="Resend confirmation email" type="submit" name="submit" primary fullWidth />
        </form>
      );
    }
    if (this.props.notification.type==="SUCCESS") 
      toast(this.props.notification.message, {type: toast.TYPE[this.props.notification.type], position: toast.POSITION.BOTTOM_CENTER, onClose: ()=>this.props.clearNotification() });
    return (
      <div>
        {form}
        <br/ >
        <FlatButton default onClick={()=>this.props.toggleComponent('login')} label="Go back" />
      </div>
    );
  }
}

export default ResendConfirmation;
