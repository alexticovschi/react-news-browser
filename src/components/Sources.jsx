import React from 'react';
import SourceLink from './SourceLink';

const Sources = (props) => {
        console.log('[SOURCE PROPS]:', props.sources.name);
        return (
            <div className="tc">
                <h1 style={{marginTop:"0px"}}>.</h1>
                <h1 style={{marginTop:"40px"}}>News Sources</h1>

                <ul style={{listStyleType:"none",marginTop:"20px"}}>
                    {props.sources.map((source, i) => (
                        <SourceLink
                            key={i}
                            sourceId={source.id}
                            sourceName={source.name}
                        />
                    ))}
                </ul>
            </div> 
        )      
}

export default Sources;