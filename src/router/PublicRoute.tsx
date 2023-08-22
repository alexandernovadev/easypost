import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface RequireAuthProps {
  children: JSX.Element | JSX.Element[]
}

export const NoRequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useAuth()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (auth) {
    // Si el usuario no está autenticado, redirígelo a la página de inicio de sesión
    return <Navigate to="/allposthome" replace />
  }

  // Si el usuario está autenticado, renderiza el contenido (children)
  return <>{children}</>
}
