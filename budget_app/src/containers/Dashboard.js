import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../assets/images/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';


import { 
  logout
} from "../actions/userActions";


class Dashboard extends Component {

  constructor(){
    super();
    this.state = { 
      mobileFooterIndex: 0 
    };
  }

  componentDidMount() {
    if (!this.props.user.authenticated) this.props.history.push('/');
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.authenticated) this.props.history.push('/');
  }

  select = (mobileFooterIndex) => this.setState({mobileFooterIndex});

  render() {
    let mobileFooter;
    if (this.props.mobileView) {
      mobileFooter = (
          <BottomNavigation selectedIndex={this.state.mobileFooterIndex} style={{bottom: "0vh", position: "fixed", zIndex: '10'}}>
            <BottomNavigationItem
              label="Bla"
              icon={<ArrowForwardIcon />}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="La"
              icon={<ArrowForwardIcon />}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Boo"
              icon={<ArrowForwardIcon />}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
      );
    }

    return (
      <div>
        <div style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1vw', paddingTop: '10vh' }}>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="App-title" style={{color: "#FFF"}}>Dashboard</h1>
          <RaisedButton label="logout" primary onClick={this.props.logout} style={{height: 50}}/>
        </div>
        {mobileFooter}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    notification: state.global.notification,
    mobileView: state.global.mobileView
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);