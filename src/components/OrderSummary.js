import React, {Component} from 'react'
import Aux from '../hoc/Div'
import Button from './ui/Button'

class OrderSummary extends Component { 
    
    ingredientSummary = () => Object.keys(this.props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                {this.props.ingredients[igKey]} x <span style={{textTransform: 'capitalize'}}>{igKey}</span>
            </li>
        )
    })

    componentDidUpdate(){
        console.log('updates')
    }

    render () {
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious burger with the following ingredients:</p>
                <ul>
                {this.ingredientSummary()}
                </ul>
                <p><strong>Our Price: $ {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button type="Danger" clicked={this.props.cancel}>CANCEL</Button>
                <Button type="Success" clicked={this.props.continue}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary