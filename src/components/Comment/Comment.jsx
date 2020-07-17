import React, { Component } from 'react';

function Comment(props) {
  return (
    <>
      <h3>{props.comment.content}</h3>
    </>
  );
}

export default Comment;