import React, { PureComponent } from 'react'
import Relay from 'react-relay'
import { Route, Router, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'

import ViewerQueries from '../queries/ViewerQueries';
import { Home, Login, Signup, UserList, AppWrapper, NewUser } from '.'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('/graphql', {
    credentials: 'same-origin',
  })
);

class Root extends PureComponent {
  render() {
    return (
      <Router
          history={browserHistory}
          environment={Relay.Store}
          render={applyRouterMiddleware(useRelay)}
      >
        <Route
            path="/"
            component={Home}
            queries={ViewerQueries}
        />
        <Route
            path="/login"
            component={Login}
        />
        <Route
            path="/signup"
            component={Signup}
        />
        <Route path="/app" component={AppWrapper} queries={ViewerQueries}>
          <Route
              path="/app/allUsers"
              component={UserList}
              queries={ViewerQueries}
          />
          <Route
              path="/app/user/new"
              component={NewUser}
          />
        </Route>
      </Router>
    );
  }
}

export default Root;
