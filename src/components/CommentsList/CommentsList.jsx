import React, { Component } from 'react';
import Comment from '../Comment/Comment'

function CommentsListPage(props) {
  return (
    <>
      <h1>Comment List Below</h1>
      <div className='PuppyListPage-grid'>

        
        {props.comments.map(comment => 
        comment.movie_id===props.movie ? 
          <Comment
            comment={comment}
            key={comment._id}
          />
          :
          ""
        )}
      </div>
    </>
  );
}

export default CommentsListPage;