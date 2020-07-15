import React from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
function MovieDetailPage(props) {
  // Refer to MovieListItem to see how movie is being passed via the <Link>
  const movie = props.location.state.movie;
  return (
    <>
      <h1>Movie Details</h1>
      <MovieCard
        key={movie._id}
        movie={movie}
      />
    </>
  );
}
export default MovieDetailPage;