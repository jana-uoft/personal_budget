import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from '../assets/images/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
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
        <Paper zDepth={1} style={{bottom: "0%", position: "fixed", zIndex: '10', width: '98vw'}}>
          <BottomNavigation selectedIndex={this.state.mobileFooterIndex}>
            <BottomNavigationItem
              label="Recents"
              icon={<ArrowForwardIcon />}
              onClick={() => this.select(0)}
            />
            <BottomNavigationItem
              label="Favorites"
              icon={<ArrowForwardIcon />}
              onClick={() => this.select(1)}
            />
            <BottomNavigationItem
              label="Nearby"
              icon={<ArrowForwardIcon />}
              onClick={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      );
    }

    return (
      <div>
        <img src={logo} className="logo" alt="logo" />
        <h1 className="App-title">Dashboard</h1>
        <RaisedButton label="logout" primary fullWidth onClick={this.props.logout}/>
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