import React from 'react';

const LoadMoreBtn = ({loadMore}) => {
    return (
        <div className="tc mw8 center mt4 mb3">
            <button className="loadmore f6 w-100 ph3 pv3 mb2 dib white bg-black" onClick={loadMore}>Load More</button>
        </div>
    );
};

export default LoadMoreBtn;