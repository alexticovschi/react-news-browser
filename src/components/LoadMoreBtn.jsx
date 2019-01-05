import React from 'react';

const LoadMoreBtn = ({loadMore}) => {
    return (
        <div className="tc mw8 center mt4 mb3">
            <a className="f6 w-100 link dim ph3 pv3 mb2 dib white bg-black" onClick={loadMore}>Load More</a>
        </div>
    );
};

export default LoadMoreBtn;