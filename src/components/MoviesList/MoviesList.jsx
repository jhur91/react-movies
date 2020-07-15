import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MovieItem from '../../pages/MovieItem/MovieItem';

function MoviesList(props){
    return(
      <>
        <h1>Movies List</h1>
        <div className='MoviesList'>
          {props.movies.map( (movie, idx) => 
          <MovieItem 
          movie={movie}
          key={movie._id}
          />
          )}
        </div>
      </>
    );
}



export default MoviesList;
