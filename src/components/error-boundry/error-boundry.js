import React, { Component } from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {
  state = {
    errror: false,
  };

  componentDidCatch() {
    this.setState({ errror: true });
  }

  render() {
    if (this.state.error) return <Error />;

    return this.props.children;
  }
}
