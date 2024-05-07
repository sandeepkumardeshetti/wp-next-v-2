import React from 'react'
import dompurify from "isomorphic-dompurify";

const DomPurify = (props) => {
const sanitizer = dompurify.sanitize;
  return (
    <div className={props.domClass} dangerouslySetInnerHTML={{ __html: sanitizer(props.domData) }} />
  )
}

export default DomPurify
