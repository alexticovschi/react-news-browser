import React from 'react';
import SourceLink from './SourceLink';
import {Animated} from "react-animated-css";

const NewsCategories = (props) => {
        const category_name = props.sources[0].category.charAt(0).toUpperCase() + props.sources[0].category.substr(1);
        return (
            <section className="box-sources mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <h1 style={{marginTop:"0px"}}>.</h1>
                    
                    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                        <h2 className="category-name tc">{category_name}</h2>
                    </Animated>

                    <ul className="sources">
                        {props.sources.map((source, i) => (
                            <div key={i} className="fl w-100 w-third-ns pa2">
                                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDelay={160}>
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
            </section>
        )      
}

export default NewsCategories;