import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://gz-react-burger.firebaseio.com/'
})





export default instance
