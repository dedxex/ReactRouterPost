import React, { Component } from 'react';
import {PostsIndex} from './posts_index';
export default class App extends Component {
  render() {
    return (
      <div>
      <h2>Blog Post Application</h2>
      {this.props.children}
      </div>
    );
  }
}
