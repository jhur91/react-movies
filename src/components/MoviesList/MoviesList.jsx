import React from 'react';
import './MoviesList.css';

import { Route, Switch, Link } from 'react-router-dom';
import MovieItem from '../../pages/MovieItem/MovieItem';

function MoviesList(props){
  // let moviePoster = movie.poster_path;

    return(
      <>
        {/* <h1>Movies List</h1> */}

        <div className='MoviesList'>
        <div><br/><h1>Welcome to FilmReview!</h1><br/><h3>Sign up and start reviewing films that are </h3><h3>CURRENTLY RELEASED!</h3></div>
          {props.movies.map( (movie, idx) =>
        <div>
        <MovieItem 
          movie={movie}
          key={movie._id}
          />
          </div>
          )}
        </div>
      </>
    );
}



export default MoviesList;
