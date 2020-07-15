import React, { Component } from 'react';
import Comment from '../Comment/Comment';

export default class CommentsList extends Component {
  render() {
    return (
      <div>
        <Comment />
        <Comment />
        <Comment />
      </div>
    )
  }
}