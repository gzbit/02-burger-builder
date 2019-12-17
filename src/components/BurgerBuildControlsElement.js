import React from 'react'

import css from './BurgerBuildControlsElement.module.css'

const BurgerBuildControlsElement = (props) => {

    return (
        <div className={css.BurgerBuildControlsElement}>
            <div className={css.Label}>{props.label}</div>
            <button className={css.Less} onClick={props.less} disabled={props.disabled}>Less</button>
            <button className={css.More} onClick={props.more}>More</button>
        </div>
    )
}

export default BurgerBuildControlsElement