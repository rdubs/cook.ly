import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import AuthService from './utils/AuthService';
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';
import Host from './components/Host/host.jsx';
import Login from './components/Auth/login.jsx';
import User from './components/User/user.jsx';
// make sure to enter your Auth0 credentials below
const auth = new AuthService('OcSbM0BED7B5DhINGw4BZKTJwfBPLq3n', 'cookly.auth0.com');
// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} auth={auth}>
      <IndexRoute component={Home} />
      <Route path="host" component={Host} onEnter={requireAuth}/>
      <Route path="user" component={User} onEnter={requireAuth}/>
      <Route path="login" component={Login} />
    </Route>
  </Router>
), document.getElementById('app'));
