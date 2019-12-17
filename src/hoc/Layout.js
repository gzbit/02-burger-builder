import React, {Component} from 'react'

import Aux from './Div'
import css from './Layout.module.css'
import Toolbar from '../components/nav/Toolbar'
import SideDrawer from '../components/nav/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    toggleSideDrawer = () => this.setState(
        (prevState, props) => {
            return(
                {showSideDrawer: !prevState.showSideDrawer}
            )
        }
    )
    
    closeSideDrawer = () => this.setState({showSideDrawer: false})

    openSideDrawer = () => this.setState({showSideDrawer: true})


    render() {
        return (
            <Aux>  
                <Toolbar menuClicked={this.openSideDrawer}/>
                <SideDrawer 
                    show={this.state.showSideDrawer}
                    toggle={this.toggleSideDrawer}
                    open={this.openSideDrawer}
                    close={this.closeSideDrawer}
                />
                <main className={css.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout