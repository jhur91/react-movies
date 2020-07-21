import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import AddComments from '../../components/AddComments/AddComments';
import CommentsList from '../../components/CommentsList/CommentsList';

function MovieDetailPage(props) {
  // Refer to MovieListItem to see how movie is being passed via the <Link>
  const movie = props.location.state.movie;
  console.log(movie.id)

  
  return (
    <>
      <MovieCard
        movies={props.movies}
        key={movie.id}
        movie={movie}
      />
      {props.user ? 
      <AddComments 
        user={props.user}
        id={movie.id}
        handleAddComment={props.handleAddComment} 
      />
      :
      <div></div>
}
      <CommentsList 
        user={props.user}
        movie={movie.id}
        comments={props.comments}
        handleDeleteComment={props.handleDeleteComment}
      />
    </>
  );
}
export default MovieDetailPage;