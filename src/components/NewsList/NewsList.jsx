import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import NewsItem from '../../pages/NewsItem/NewsItem';
import "./NewsList.css"

function NewsList(props){
  // let moviePoster = movie.poster_path;

    return(
      <div className="NewsList">

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
      </div>
    );
}



export default NewsList;