import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import Home from './../components/Home';
import About from './../components/About';
import Donations from './../components/Donations';
import Contact from './../components/Contact';
import Glass from './../components/Glass';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="donations" component={Donations} />
    <Route path="contact" component={Contact} />
    <Route path="glass" component={Glass} />
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