import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const Welcome = (props) => {

  return (
    <div>
      <h1 style={{color: "#FFF"}} > Welcome to Budget </h1>
      <RaisedButton label="Login" primary fullWidth style={{height: 50}} onClick={()=>props.toggleComponent('login')} />
      <br /><br />
      <RaisedButton label="Register" primary fullWidth style={{height: 50}} onClick={()=>props.toggleComponent('register')} />
    </div>
  );
}

export default Welcome;
