import {
  ReactNode,
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import { User } from '../../interfaces/User'
import Axios from '../../api/backOne'

interface AuthState {
  token: string
  user: User
}

interface AuthContextType {
  authState: AuthState | null
  signin: (data: InputsLogin) => Promise<void>
  signout: () => void
  register: (data: InputsRegister) => Promise<void>
  loading: boolean
  error: string | null
  login: boolean
}

interface InputsRegister {
  name: string
  email: string
  password: string
  confirmPassword?: string
}
interface InputsLogin {
  email: string
  password: string
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    const userStr = sessionStorage.getItem('user')

    // Ensure token and userStr are not null before parsing
    if (token && userStr) {
      const user = JSON.parse(userStr)
      // Safely parse here because we've checked userStr is not null
      setAuthState({
        token: token,
        user: user,
      })
      setLogin(true)
    }
  }, [])

  const signin = async (data: InputsLogin) => {
    setLoading(true)
    setError(null)
    try {
      const response = await Axios.post('/auth/login', data)
      console.log('data response', response)

      const authData = {
        token: response.data.token,
        user: response.data.user,
      }

      setAuthState(authData)
      setLogin(true)
      sessionStorage.setItem('token', authData.token)
      sessionStorage.setItem('user', JSON.stringify(authData.user))
      window.location.href = '/'
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setError('Error during register: ' + error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const register = async (data: InputsLogin) => {
    setLoading(true)
    setError(null)
    try {
      const response = await Axios.post('/auth/register', data)
      const authData = {
        token: response.data.token,
        user: response.data.user,
      }

  
      setAuthState(authData)
      setLogin(true)
      sessionStorage.setItem('token', authData.token)
      sessionStorage.setItem('user', JSON.stringify(authData.user))
      window.location.href = '/'
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setError('Error during register: ' + error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const signout = () => {
    setAuthState(null)
    sessionStorage.clear()
    setLogin(false)
  }

  return (
    <AuthContext.Provider
      value={{ authState, signin, register, signout, loading, error, login }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// Exporting the useContext hook for easier usage in components
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
