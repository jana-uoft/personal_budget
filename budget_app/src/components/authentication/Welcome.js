import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


const Welcome = (props) => {

  return (
    <div>
      <h1 style={{color: "#FFF"}} > Welcome to Personal Budget </h1>
      <RaisedButton label="Login" primary fullWidth  onClick={()=>props.toggleComponent('login')} />
      <br /><br />
      <RaisedButton label="Register" primary fullWidth  onClick={()=>props.toggleComponent('register')} />
    </div>
  );
}

export default Welcome;
