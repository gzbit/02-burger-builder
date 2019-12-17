import React from 'react'
import css from './Link.module.css'

const Link = (props) => (
  
    <a 
        className={props.active ? css.active : css.Link}
        href={props.href}
    >
        {props.children}
    </a>

    
)

export default Link

// <Link href="/">Target Text</Link>
// use would be the styling