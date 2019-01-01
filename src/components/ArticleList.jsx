import React, { Fragment } from 'react';
import Article from './Article';


import SearchBox from './SearchBox';
const ArticleList = ({ news, onSearchChange, getNews, loadMore, displayLoadMoreBtn }) => {
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
            <h1 style={{marginTop:"0px"}}>.</h1>
            <SearchBox 
                style={{marginTop:"60px"}}
                searchChange={onSearchChange} 
                getNews={getNews}
            />
            <section className="mw8 center avenir">
                <div className="tc">
                    {article}
                </div>
            </section>

            {displayLoadMoreBtn ? (
                <div className="tc mw8 center mt4 mb3">
                    <a className="f6 w-100 link dim ph3 pv3 mb2 dib white bg-black" onClick={loadMore}>Load More</a>
                </div>
            ) : null }
        </Fragment>
    )
}

export default ArticleList;