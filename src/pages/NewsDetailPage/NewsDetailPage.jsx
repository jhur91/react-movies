import React from 'react';
import { Route, Link } from 'react-router-dom';
import './NewsDetailPage.css'


function NewsDetailPage(props) {

  const news = props.location.state.article;
  
  
  return (

    <div className="NewsDetail">
      <h1>{news.title}</h1>
      <h5>Author: {news.author}</h5>
      <img src={`${news.urlToImage}`} alt=""/>
      <h4>{news.description}</h4>
      <br></br>
      <a href={`${news.url}`}>Read More...</a>
    

    </div>
  );
}
export default NewsDetailPage;