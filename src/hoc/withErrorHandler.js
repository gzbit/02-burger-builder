import React, {Component} from 'react'
import Modal from '../components/ui/Modal'
import Aux from './Div'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component { 

        constructor() {
            super()
            this.state = {error: null}
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null})
                return request
            })
            this.resInterceptor = axios.interceptors.response.use(
                response => response, 
                error => {
                    this.setState({error})
                }
            )    
        }
        
        // componentWillMount depreciated => constructor

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        handleErrorConfirmed = () => {
            this.setState({error: null})
        }
        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.handleErrorConfirmed}
                    >    
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler