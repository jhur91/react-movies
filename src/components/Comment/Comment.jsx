import React, { Component } from 'react';
import { Link } from 'react-router-dom';


function Comment(props) {
  console.log(props.comment)
  return (
    <>
      <h3>{props.comment.content}</h3>
      <h6> {props.user._id}</h6>
      {props.comment.user == props.user._id ? (
        <div>
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
        </div>
      )
        :
        ""
      }
    </>

  );
}

export default Comment;