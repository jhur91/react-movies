import React from 'react';
import { Link } from 'react-router-dom';

const NewsItem = ({article}) => {
  
  
  return (
    <div className='MoviePage'>
        <div className='MoviePage-movie'>
          <Link to={{
            pathname: '/newsdetail',
            state: {article} }}
          ><img src={`${article.urlToImage}`} alt=""/>
            </Link>
            {article.title}
        </div>
    </div>
  );
};

export default NewsItem;

