import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter'
import User from './user'
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

const routing = (
  <Provider store = {store}>


  <Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/users/:id" component={User} />
          <Route path="/contact" component={Counter} />

        </Switch>

    </div>
  </Router>
  </Provider>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
