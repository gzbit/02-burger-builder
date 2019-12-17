import React from 'react'

import css from './BurgerBuildControls.module.css'
import BurgerBuildControlsElement from './BurgerBuildControlsElement'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
]

const BurgerBuildControls = (props) => {
   
    return (
        <div className={css.BuildControls}>
            <p>Current Price: $ {props.price.toFixed(2)}</p>
            {controls.map( ctrl => (
                <BurgerBuildControlsElement 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    more={() => props.more(ctrl.type)}
                    less={() => props.less(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button 
                className={css.OrderButton}
                disabled={!props.canOrder} 
                onClick={props.order}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default BurgerBuildControls