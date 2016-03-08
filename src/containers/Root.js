import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import Home from './../components/Home';
import About from './../components/About';
import Donations from './../components/Donations';
import Contact from './../components/Contact';
import Glass from './../components/Glass';
import SimplyDonate from './../components/SimplyDonate';
import Login from './../components/Login';
import Admin from './../components/Admin';
import Pick from './../components/Pick';
import ValueGlass from './../components/ValueGlass';
import Config from './../components/Config';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="about#artists" component={About} />
    <Route path="donations" component={Donations} />
    <Route path="contact" component={Contact} />
    <Route path="glass" component={Glass} />
    <Route path="simply-donate" component={SimplyDonate} />
    <Route path="login" component={Login} />
    <Route path="pick" component={Pick} />
    <Route path="admin" component={Admin}>
      <Route path="config" component={Config} />
      <Route path="value-glass" component={ValueGlass} />
    </Route>
  </Route>
)

export default class Root extends Component {
  render() {
    let history = this.props.history;
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
        {routes}
      </Router>
    );
  }
}