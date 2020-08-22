import React, { Component } from 'react';
import Comment from '../Comment/Comment'

function CommentsListPage(props) {
  return (
    <div className="CommentsList">
      <h1>Comment List Below</h1>
      <div className='PuppyListPage-grid'>

        
        {props.comments.map(comment => 
        comment.movie_id===props.movie ? 
          <Comment
            user={props.user}
            comment={comment}
            key={comment._id}
            handleDeleteComment={props.handleDeleteComment}
          />
          :
          ""
        )}
      </div>
    </div>
  );
}

export default CommentsListPage;