import React from 'react';
import Article from './Article';

const ArticleList = ({ news }) => {
    const cardComponent = news.map((news, i) => (
        <Article 
            key={i}
            id={news.id} 
            img={news.urlToImage}
            articleTitle={news.title}
            description={news.description}
            publishedAt={news.publishedAt}
            sourceName={news.source.name}
            articleUrl={news.url}
            articlePublisher={news.publisher}
            />
    ));
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default ArticleList;