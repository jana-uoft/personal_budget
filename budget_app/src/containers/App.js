import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../config/store";
import Loading from "../components/global/Loading";
import PageNotFound from '../components/global/404';
import Authentication from './Authentication.js';
import Dashboard from './Dashboard.js';
import Budget from './Budget.js';


class App extends Component {

  constructor(){
    super();
    this.state = { loading: true };
  }


  componentWillMount() {
    // Display a custom loading on page refresh
    setTimeout(()=>{this.setState({ loading: false })}, 1500);
  }


  render() {
    if (this.state.loading) return( <Loading /> );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Authentication} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/budget/:id" component={Budget} />
              <Route component={PageNotFound} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}


export default App;