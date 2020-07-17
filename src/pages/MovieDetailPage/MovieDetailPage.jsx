import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import AddComments from '../../components/AddComments/AddComments';
import CommentsList from '../../components/CommentsList/CommentsList';
function MovieDetailPage(props) {
  // Refer to MovieListItem to see how movie is being passed via the <Link>
  const movie = props.location.state.movie;
  // make a new array from props.comments that has comments with this movie._id
  // const movieComments = props.comments.map( comment => comment);
  
  return (
    <>
      <h1>Movie Details</h1>
      <MovieCard
        movies={props.movies}
        key={movie._id}
        movie={movie}
      />
      <AddComments 
        id={props.movies.id}
        handleAddComment={props.handleAddComment} 
      />
      <CommentsList 
        comments={props.comments}
      />
    </>
  );
}
export default MovieDetailPage;