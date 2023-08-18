import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegisterPage } from '../components/atomic/pages/RegisterPage/RegisterPage';
import { LoginPage } from '../components/atomic/pages/LoginPage/LoginPage';
import { AllPostHomePage } from '../components/atomic/pages/AllPostHome/AllPostHomePage';  // Asegúrate de importar estos componentes.
import { RequireAuth } from './PrivateRoute';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route 
          path="/allposthome" 
          element={
            <RequireAuth>
              <AllPostHomePage />
            </RequireAuth>
          } 
        />
        <Route 
          path="/myposts" 
          element={
            <RequireAuth>
              <AllPostHomePage />   // Cambia esto al componente correspondiente si "AllPostHomePage" no es el correcto.
            </RequireAuth>
          } 
        />
        <Route 
          path="/createpost" 
          element={
            <RequireAuth>
              <AllPostHomePage />   // Cambia esto al componente correspondiente si "AllPostHomePage" no es el correcto.
            </RequireAuth>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes;
