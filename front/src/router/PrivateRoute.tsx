import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface RequireAuthProps {
  children: React.ReactNode
}

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const auth = useAuth()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (!auth) {
    // Si el usuario no está autenticado, redirígelo a la página de inicio de sesión
    return <Navigate to="/login" replace />
  }

  // Si el usuario está autenticado, renderiza el contenido (children)
  return <>{children}</>
}
