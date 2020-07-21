import React from 'react';
import { Route, Link } from 'react-router-dom';

// import AddComments from '../../components/AddComments/AddComments';
// import CommentsList from '../../components/CommentsList/CommentsList';

function NewsDetailPage(props) {
  // Refer to MovieListItem to see how movie is being passed via the <Link>

  const news = props.location.state.article;
  
  
  return (

    <>
      {news.description} 
      <br></br>
      <a href={`${news.url}`}>Read More...</a>
    

      {/* <MovieCard
        movies={props.movies}
        key={movie.id}
        movie={movie}
      />
      <AddComments 
        user={props.user}
        id={movie.id}
        handleAddComment={props.handleAddComment} 
      />
      <CommentsList 
        user={props.user}
        movie={movie.id}
        comments={props.comments}
        handleDeleteComment={props.handleDeleteComment}
      /> */}
    </>
  );
}
export default NewsDetailPage;