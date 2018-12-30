import React from 'react';
import SourceLink from './SourceLink';

const Sources = (props) => {
        console.log('[SOURCE PROPS]:', props.sources.name);
        return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    
                <h1 style={{marginTop:"0px"}}>.</h1>
                <h2 className="tc" style={{marginTop:"100px"}}>News Sources</h2>

                <ul>
                    {props.sources.map((source, i) => (
                        <div key={i} className="fl w-100 w-third-ns pa2">
                            <div className="bg-animate hover-bg-lightest-blue outline bg-white pv3 tc" >
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

export default Sources;