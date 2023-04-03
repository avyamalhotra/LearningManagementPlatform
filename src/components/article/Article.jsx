import React from 'react';
import './article.css';
import {Link} from 'react-router-dom'

const Article = ({ imgUrl, button1text,button2text,text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <button type="button" className='cart__button'><Link to="/Mycart">{button1text}</Link></button>
        <button type="button" className='cart__button'><Link to="/Giscourse">{button2text}</Link></button>
      </div>
    </div>
  </div>
);

export default Article;