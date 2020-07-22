import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import NewsItem from '../../pages/NewsItem/NewsItem';

function NewsList(props){
  // let moviePoster = movie.poster_path;

    return(
      <>
        <h1>News List</h1>

        <div className='MoviesList'>
        <div><br/><h1>Welcome to FilmReview!</h1><br/><h3>Get Your Latest Entertainment News Here!</h3></div>
          {props.news.map( (article, idx) =>
        <div>
          <NewsItem 
            article={article}
          />
          
          </div>
          )}
        </div>
      </>
    );
}



export default NewsList;