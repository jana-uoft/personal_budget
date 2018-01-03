import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../assets/images/logo.svg';

class Dashboard extends Component {

  componentDidMount() {
    if (!this.props.user.authenticated) this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <img src={logo} className="logo" alt="logo" />
        <h1 className="App-title">Dashboard</h1>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    // login: (user) => {
    //   dispatch(login(user));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);