import React from 'react'
import Logo from '../ui/Logo'
import css from './SideDrawer.module.css'
import Navigation from '../nav/Navigation'
import Backdrop from '../ui/Backdrop'
import Aux from '../../hoc/Div'

const SideDrawer = (props) => {
    const attachedClasses = props.show 
        ? [css.SideDrawer, css.Open]
        : [css.SideDrawer, css.Close]
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={css.Logo}><Logo /></div>
                <nav>
                    <Navigation />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer
