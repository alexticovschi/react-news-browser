import React from 'react';

const SearchBox = ({ getNews, searchChange }) => {
    return (
        <div className="pa4-l black-80 tc center">
            <form className="mw7 center pa2 black-80" onSubmit={(e) => e.preventDefault()}>
            <fieldset className="cf bn ma0 pa0">
                <div className="cf">
                <label className="clip">Search</label>
                <input 
                    className="ba b--black-20 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" 
                    placeholder="Search for news" 
                    type="search" 
                    onChange={searchChange}
                    // onKeyUp={getNews} 
                />
				<input 
					className="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-15-m w-10-l br2-ns br--right-ns" 
					type="submit" 
					value="Search"
					onClick={getNews}/>
                </div>
            </fieldset>
            </form>
        </div>

    )
}

export default SearchBox;