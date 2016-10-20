import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';
import Dashboard from './routes/Dashboard';
import NotFound from './routes/NotFound';
import Products from './routes/Products';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="*" component={NotFound} />
    </Router>
  );
};
