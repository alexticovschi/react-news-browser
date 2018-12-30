import React from 'react';
import SourceLink from './SourceLink';

const NewsCategories = (props) => {
        console.log();
        return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <h1 style={{marginTop:"0px"}}>.</h1>
                    <h3 className="tc" style={{marginTop:"100px"}}>Select a News Source to get Top headlines</h3>
                    <ul>
                        {props.sources.map((source, i) => (
                            <div key={i} className="fl w-100 w-third-ns pa2">
                                <div className="bg-animate hover-bg-lightest-blue outline bg-white pv4 tc" >
                                    <SourceLink
                                        sourceId={source.id}
                                        sourceName={source.name}
                                    />
                                </div>
                            </div>
                        ))}
                    </ul>  
                </div>
            </div>
        )      
}

export default NewsCategories;