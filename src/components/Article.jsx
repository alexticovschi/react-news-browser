import React from 'react';

const Article = ({articleTitle, img, description, publishedAt, articlePublisher, sourceName, articleUrl}) => {
    return (
        <article className="bt bb b--black-10">
            <a className="db pv4 ph3 ph0-l no-underline black dim" href={articleUrl} target="_blank">
                <div className="flex flex-column flex-row-ns">
                    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                        <img src={img || "http://www.collectcent.com/news/img/placeholder.png"} className="db" alt="article img"/>
                    </div>
                    <div className="w-100 w-60-ns pl3-ns">
                    <h1 className="f3 fw1 baskerville mt0 lh-title">{articleTitle}</h1>
                    <p className="f6 f5-l lh-copy">
                        {description}
                    </p>

                    {/* <p className="f6 lh-copy mv0">Publisher: {sourceName}<a href={articleUrl} target="_blank">{articlePublisher}</a></p> */}
                    <p className="f6 lh-copy mv0">Publisher: {sourceName}
                        {articlePublisher}
                    </p>
                    </div>
                </div>
            </a>
        </article>
    )
}

export default Article;