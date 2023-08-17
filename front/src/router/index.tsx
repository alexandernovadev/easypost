import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../components/atomic/pages/RegisterPage/RegisterPage'
import { LoginPage } from '../components/atomic/pages/LoginPage/LoginPage'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default index
