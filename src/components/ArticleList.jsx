import React, { Fragment } from 'react';
import Article from './Article';

import SearchBox from './SearchBox';
const ArticleList = ({ news, onSearchChange, getNews }) => {
    const article = news.map((news, i) => (
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
        <Fragment>
            <SearchBox 
                searchChange={onSearchChange} 
                getNews={getNews}
                />
            <section className="mw8 center avenir">
                <div className="tc">
                    {article}
                </div>
            </section>
        </Fragment>
    )
}

export default ArticleList;