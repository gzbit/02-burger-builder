import React from 'react'
import css from './Toolbar.module.css'
import Logo from '../ui/Logo'
import Navigation from '../nav/Navigation'
import Menu from '../nav/Menu'

const Toolbar = (props) => (
    <header className={css.Toolbar}>
        <Menu menuClicked={props.menuClicked} />
        <div className={css.Logo}><Logo /></div>
        <nav className={css.DesktopOnly}><Navigation /></nav>
    </header>
)


export default Toolbar