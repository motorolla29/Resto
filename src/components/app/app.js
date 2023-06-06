import React from 'react';
import { MainPage, CartPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';

const App = ({ totalCount }) => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader totalCount={totalCount} />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ totalCount }) => {
  return {
    totalCount,
  };
};

export default connect(mapStateToProps)(App);
