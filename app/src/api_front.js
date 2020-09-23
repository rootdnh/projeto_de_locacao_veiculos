import Axios from 'axios'



const api = Axios.create({
    baseURL: 'http://localhost:3330',
    timeout: 5000,
})

export default api
