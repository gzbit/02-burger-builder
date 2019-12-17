import React from 'react'
import PropTypes from 'prop-types'
import css from './Button.module.css'

const Button = (props) => {
    const allowedTypes = ['Danger', 'Success']
    if (!allowedTypes.includes(props.type)) console.warn('Invalid Button type: ', props.type)
    return (
        <button
            className={[css.Button, css[props.type]].join(' ')}
            onClick={props.clicked}
        >
            {props.children}
        </button>
    )

}

Button.propTypes ={
    clicked: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

export default Button