import React, { Fragment } from 'react';
import Article from './Article';
import LoadMoreBtn from './LoadMoreBtn';
import SearchBox from './SearchBox';

const ArticleList = ({ topHeadlines, hideLoadMoreBtn, news, onSearchChange, getNews, loadMore, displayLoadMoreBtn }) => {
    const articles = news.map((news, i) => (
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
    const headlines = topHeadlines.map((news, i) => (
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
            <h1 className="spacer" style={{marginTop:"0px", marginBottom:"50px"}}>.</h1>
            <SearchBox 
                hideLoadMoreBtn={hideLoadMoreBtn}
                searchChange={onSearchChange} 
                getNews={getNews}
            />
            <div className="topheadlines mw8 center avenir">
                <div className="tc articles">
                    {articles.length === 0 ? headlines : articles}
                </div>
            </div>

            {displayLoadMoreBtn ? (
                <LoadMoreBtn loadMore={loadMore}/>
            ) : null }
        </Fragment>
    )
}

export default ArticleList;