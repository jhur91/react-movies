import React from 'react';
import { Link } from 'react-router-dom';
import "./NewsItem.css"

const NewsItem = ({article}) => {
  
  
  return (
    <div className='NewsItem'>
        <div className='MoviePage-movie'>
          <Link to={{
            pathname: '/newsdetail',
            state: {article} }}
          >
              <img src={`${article.urlToImage}`} onerror="this.src={`${'https://www.tibs.org.tw/images/default.jpg'}`}" />
            </Link>
            {<br></br>}
            <Link to={{
            pathname: '/newsdetail',
            state: {article} }}
          >{article.title}
            </Link>
            
        </div>
    </div>
  );
};

export default NewsItem;




