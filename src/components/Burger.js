import React from 'react'

import css from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient'

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(
        igKey => [...Array(props.ingredients[igKey])].map( 
            (_, i) => <BurgerIngredient key={igKey + i} type={igKey} /> 
        )
    ).reduce(                                   // makes out of an array of arrays one single array
        (arr, el) => arr.concat(el),            // array, element
        []                                      // initial value of the new array 
    )

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingedients!</p>
    }

    return (
        <div className={css.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger