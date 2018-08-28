import React from 'react';
import SourceLink from './SourceLink';

const SourceCategory = (props) => {
        return (
            <div>
                <ul style={{listStyleType:"none !important"}}>
                    {props.sources.map((source,i) => (
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

export default SourceCategory;