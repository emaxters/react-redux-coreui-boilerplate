import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <ReduxToastr />
        <BrowserRouter>
          <Switch>
            {
              user ? <Route path="/" name="Home" component={Home} /> : <Route path="/" name="Login Page" component={Login} />
            }
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps, null)(App);
