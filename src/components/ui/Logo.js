import React from 'react'
import burgerLogo from '../../assests/images/burger-logo.png' 
import css from './Logo.module.css'

const Logo = () => (
    <div  className={css.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default Logo