import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => {
  
  
  return (
    <div className='MoviePage'>
        <div className='MoviePage-movie'>
          <span>Title: </span>
          <Link to={{
            pathname: '/details',
            state: {movie} }}
          >{movie.title}
            </Link>
        </div>
    </div>
  );
};

export default MovieItem;