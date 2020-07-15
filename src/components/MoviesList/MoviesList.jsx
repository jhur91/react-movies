import React from 'react';

function MoviesList(props){
    return(
      <>
        <h1>Movies List</h1>
        <div className='MoviesList'>
          {props.movies.map( movie => movie.title)};
        </div>
      </>
    );
}

export default MoviesList;