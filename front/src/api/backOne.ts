import axios from 'axios'

const Axios = axios.create({
  baseURL:  import.meta.env.VITE_BACK_URL || 'http://localhost:3000/api',
  headers: {
    authorization: sessionStorage.getItem('token') || '',
  },
})

Axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Si es una respuesta "unauthorized", cierra la sesión
      sessionStorage.clear()
      // Redirige a la página de inicio de sesión
      window.location.href = '/login';
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default Axios
