import React from 'react';
import { Route, Link } from 'react-router-dom';


function NewsDetailPage(props) {

  const news = props.location.state.article;
  
  
  return (

    <>
      <h1>{news.title}</h1>
      <h6>{news.author}</h6>
      <img src={`${news.urlToImage}`} alt=""/>
      <h4>{news.description}</h4>
      <br></br>
      <a href={`${news.url}`}>Read More...</a>
    

    </>
  );
}
export default NewsDetailPage;