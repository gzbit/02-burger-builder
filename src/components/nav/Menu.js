import React from 'react'
import css from './Menu.module.css'

const Menu = (props) => {
    return (
        <div
            className={css.Menu} 
            onClick={props.menuClicked}
        > 
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Menu