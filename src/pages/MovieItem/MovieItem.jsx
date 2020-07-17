import React from 'react';
import './MovieItem.css';
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => {
  
  
  return (
    <div className='MoviePage'>
        <div className='MoviePage-movie'>
          <Link to={{
            pathname: '/details',
            state: {movie} }}
          ><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""/>
            </Link>
        </div>
    </div>
  );
};

export default MovieItem;