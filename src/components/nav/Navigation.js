import React from 'react'
import css from './Navigation.module.css'
import NavigationItem from './NavigationItem'

const Navigation = () => (
    <ul className={css.Navigation}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
        
    </ul>
)

export default Navigation