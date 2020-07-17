import React, { Component } from 'react';
import {Link} from 'react-router-dom';


function Comment(props) {
  return (
    <>
      <h3>{props.comment.content}</h3>

      <Link
          className='btn btn-xs btn-warning'
          to={{
            pathname: '/edit',
            state: props.comment
          }}
        >
          EDIT
      </Link>

      <button
        className='btn btn-xs btn-danger margin-left-10'
        onClick={() => props.handleDeleteComment(props.comment._id)}
      >
        DELETE
      </button>
    </>
  );
}

export default Comment;