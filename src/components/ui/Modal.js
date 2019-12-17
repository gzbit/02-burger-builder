import React, {Component} from 'react'
import Aux from '../../hoc/Div'
import css from './Modal.module.css'
import Backdrop from './Backdrop'

class Modal extends Component {

    componentDidUpdate () {
        console.log('updates')
    }

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show
            || nextProps.children !== this.props.children
        
    }

    render () {
        return (
            <Aux>
            
                <Backdrop
                    show={this.props.show} 
                    clicked={this.props.modalClosed}
                />
                <div 
                    className={css.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal