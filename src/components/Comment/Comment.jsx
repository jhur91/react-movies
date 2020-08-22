import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Comment.css';


function Comment(props) {
  console.log(props.comment)
  return (
    <div className="Comment">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>

            <th>Review</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{new Intl.DateTimeFormat("en-US", {
              year: "2-digit",
              month: "numeric",
              day: "2-digit"
            }).format(props.comment.createAt)}</td>
            <td>{props.comment.user.name}</td>
            <td>{props.comment.content}</td>
            <td>{props.comment.rating}</td>
            {props.comment.user._id == (props.user && props.user._id) ? (
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
          </tr>
        </tbody>
      </table>

    </div>

  );
}

export default Comment;

