import React from 'react';
import {Link} from 'react-router-dom';
import './MovieCard.css';

function MovieCard({movie}) { 
  let moviePoster = movie.poster_path;

  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h1 className='panel-title'>{movie.title}</h1>
      </div>
      <div className='movieInfo'>
        <img className='movieCardImage' src={`https://image.tmdb.org/t/p/w500/${moviePoster}`} alt=""/>
      <div className='panel-body'>
        <dl>
          <dt>Release Date:</dt>
          <dd>{movie.release_date}</dd>
          <dt>Overview:</dt>
          <dd>{movie.overview}</dd>
          <br/>
          FANDANGO SEARCH: 
          <a href={`https://www.fandango.com/search?q=${movie.title}`}> Buy Tickets!</a>
        </dl>
      </div>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}
export default MovieCard;