import React from 'react'
import PropTypes from 'prop-types'

import css from './BurgerIngredient.module.css'

const BurgerIngredient = (props) => {
    let ingredient = null

    switch (props.type) {
        case ('bread-bottom'): 
            ingredient = <div className={css.BreadBottom}>Bottom</div>
            break
        case ('bread-top'):
            ingredient = (
                <div className={css.BreadTop}>
                    Top
                    <div className={css.Seeds1}>.</div>
                    <div className={css.Seeds2}>.</div>
                </div>
            )
            break
        case ('meat'):
            ingredient = <div className={css.Meat}>Meat</div>
            break
        case('cheese'):
            ingredient = <div className={css.Cheese}>Cheese</div>    
            break
        case ('salad'):
            ingredient = <div className={css.Salad}>Salad</div>
            break    
        case ('bacon'):
            ingredient = <div className={css.Bacon}>Bacon</div>
            break
        default:
            ingredient = null
    }

    return ingredient
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}

export default BurgerIngredient