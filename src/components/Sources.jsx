import React from 'react';
import SourceLink from './SourceLink';
import {Animated} from "react-animated-css";

const Sources = (props) => {
        console.log('[SOURCE PROPS]:', props.sources.name);
        return (
            <div className="mw9 center ph3-ns" style={{marginBottom:"100px"}}>
                <div className="cf ph2-ns">
                    
                <h1 style={{marginTop:"0px"}}>.</h1>
                <h2 className="tc" style={{marginTop:"80px"}}>News Sources</h2>

                <ul>
                    {props.sources.map((source, i) => (
                        <div key={i} className="fl w-100 w-third-ns pa2">
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={100}>
                                <div className="bg-animate hover-bg-lightest-blue outline bg-white pv3 tc" >
                                    <SourceLink
                                        sourceId={source.id}
                                        sourceName={source.name}
                                    />
                                </div>
                            </Animated>
                        </div>
                    ))}
                </ul>
                        
                </div>
            </div>
            
        )      
}

export default Sources;