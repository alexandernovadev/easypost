import axios from 'axios'

const Axios = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    authorization: sessionStorage.getItem('token') || '',
  },
})

export default Axios
