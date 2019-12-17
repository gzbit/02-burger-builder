import React, {Component} from 'react'
import axios from '../axios-orders'

import Aux from '../hoc/Div'
import Burger from '../components/Burger'
import BurgerBuildControls from '../components/BurgerBuildControls'
import Modal from '../components/ui/Modal'
import OrderSummary from '../components/OrderSummary'
import Spinner from '../components/ui/Spinner'
import withErrorHandler from '../hoc/withErrorHandler'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
}

class BurgerBuilder extends Component {

    checkCanOrder = false

    componentDidUpdate() {
        if (this.checkCanOrder) {
            const igs = {...this.state.ingredients}
            let canOrder = false
            Object.keys(igs).forEach(
                (key) => {if (igs[key] >0) canOrder = true}
            )   
            this.setState({canOrder})
            this.checkCanOrder= false
        }
    }
    
    state = {
       ingredients: null,
       totalPrice: 4, 
       canOrder: false,
       purchasing: false,
       loading: false,
       error: false,
    }

    componentDidMount() {
        axios
            .get('https://gz-react-burger.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data})
                Object.keys(response.data).forEach (key => {
                    if (response.data[key] > 0) {
                        this.setState({canOrder : true})
                    }
                })
            })
            .catch(error => {
                this.setState({error: true})
                error.message = 'Das ist ein Test'
                console.log('ERROR:')
                console.log(error)
            })
    }

    handleMore = (type) => {
        const ingredients = {...this.state.ingredients}
        ingredients[type]++
        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type]
        this.setState({totalPrice, ingredients})
        this.checkCanOrder = true
    }

    handleLess = (type) => {
        const ingredients = {...this.state.ingredients}
        let totalPrice = this.state.totalPrice
        if (ingredients[type] > 0)  {
            ingredients[type]--
            totalPrice -= INGREDIENT_PRICES[type]
        }
        this.setState({totalPrice, ingredients})
        this.checkCanOrder = true
    }

    updateCanOrder = () => {
        // went to componentDidUpdate()
    }

    handlePurchase = () => {
        this.setState({purchasing: true})
    }

    handleCancelPurchase = () => {
        this.setState({purchasing: false})
    }

    handleCommitPurchase = () => {
        // alert('Yout Burger is on its way!')
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            costumer: {
                name: 'Emma Panda',
                address: {
                    street: '18 Longdean',
                    city: 'Nash Mills',
                    postcode: 'HP3 8BZ',
                    country: 'UK'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios
            .post('/orders.jsoni', order)
            .then(response => {
                this.setState({loading: false, purchasing: false})
            })
            .catch(error => {
                this.setState({loading: false, purchasing: false})
            })
    }

    render () {
        const disabledInfo = {...this.state.ingredients}
        let orderSummary = (
            <OrderSummary 
                ingredients={this.state.ingredients} 
                price={this.state.totalPrice}
                cancel={this.handleCancelPurchase}                        
                continue={this.handleCommitPurchase}    
            />
        )
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        if (!this.state.ingredients) {
            orderSummary = <Spinner />
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let burger = <Spinner />
        if (this.state.ingredients) {   
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerBuildControls 
                        more={this.handleMore} 
                        less={this.handleLess}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        canOrder={this.state.canOrder}
                        order={this.handlePurchase}
                    />
                </Aux>
            )
        }
        if (this.state.error) {
            burger = (
                <p>
                    <strong>Das sollte so nicht sein!</strong><br/>
                    Ingredients could not be loaded.
                </p>
            )
        }

        return (
            <Aux>
                <Modal 
                    show={this.state.purchasing} 
                    modalClosed={this.handleCancelPurchase}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios)