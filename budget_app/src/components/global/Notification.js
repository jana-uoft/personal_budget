import React, { Component } from 'react';
import { connect } from "react-redux";
import Snackbar from 'material-ui/Snackbar';


class Notification extends Component {

  render() {
    let bodyStyle = { opacity: '0%' };
    let actionStyle = { display: 'none' };
    if (this.props.type==="failure") {
      bodyStyle = { background: '#CE5656' };
      actionStyle = { color: "#FFF" };
    }
    if (this.props.type==="success") {
      bodyStyle = { background: '#34A251' };
      actionStyle = { color: "#FFF" };
    }

    return (
      <Snackbar
        open={this.props.message!==""}
        message={this.props.message}
        action={ <span style={actionStyle}> OK </span> }
        onActionClick={this.props.clearNotification}
        onRequestClose={this.props.clearNotification}
        bodyStyle={bodyStyle}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.global.notification.message,
    type: state.global.notification.type
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    clearNotification: () => {
      dispatch({ type: 'CLEAR_NOTIFICATION' });
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Notification);
