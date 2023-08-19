import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '../components/atomic/pages/RegisterPage/RegisterPage'
import { LoginPage } from '../components/atomic/pages/LoginPage/LoginPage'
import { AllPostHomePage } from '../components/atomic/pages/AllPostHome/AllPostHomePage' // Asegúrate de importar estos componentes.
import { RequireAuth } from './PrivateRoute'
import { CreatePostPage } from '../components/atomic/pages/CreatePost/CreatePostPage'
import { NoRequireAuth } from './PublicRoute'
import { MyPosts } from '../components/atomic/pages/MyPosts/MyPosts'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <NoRequireAuth>
              <LoginPage />
            </NoRequireAuth>
          }
        />
        <Route
          path="/login"
          element={
            <NoRequireAuth>
              <LoginPage />
            </NoRequireAuth>
          }
        />
        <Route
          path="/register"
          element={
            <NoRequireAuth>
              <RegisterPage />
            </NoRequireAuth>
          }
        />

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
              <MyPosts />
            </RequireAuth>
          }
        />
        <Route
          path="/createpost"
          element={
            <RequireAuth>
              <CreatePostPage />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="*" element={<>Page Not Found</>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
