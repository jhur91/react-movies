import React from 'react';
import {Link} from 'react-router-dom';
function MovieCard({movie}) { 
  return (
    <div className='panel panel-default'>
      <div className="panel-heading">
        <h3 className='panel-title'>{movie.title}</h3>
      </div>
      <div className='panel-body'>
        <dl>
          <dt>Release Date:</dt>
          <dd>{movie.release_date}</dd>
          <dt>Overview:</dt>
          <dd>{movie.overview}</dd>
        </dl>
      </div>
      <div className='panel-footer'>
        <Link to='/'>RETURN TO LIST</Link>
      </div>
    </div>
  );
}
export default MovieCard;