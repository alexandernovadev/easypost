import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../components/atomic/pages/RegisterPage/RegisterPage'
import { LoginPage } from '../components/atomic/pages/LoginPage/LoginPage'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default index
