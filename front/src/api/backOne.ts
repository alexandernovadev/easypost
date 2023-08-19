import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers:{
    'authorization':localStorage.getItem('token')  || ''
  }
})

export default Axios
