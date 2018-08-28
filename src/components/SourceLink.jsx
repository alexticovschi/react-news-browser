import React from 'react'
import { Link } from 'react-router-dom';

const SourceLink = (props) => {
  return (
    <div>
      <Link to={props.sourceId}>
        {props.sourceName}
      </Link>
    </div>
  )
}

export default SourceLink;