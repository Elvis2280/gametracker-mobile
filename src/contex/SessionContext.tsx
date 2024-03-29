import React, {
  createContext,
  type ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'
import useSecureStorage from '../../src/hooks/useStorage'
import { storageKeys } from '../utils/constants'
import { type userType } from '../types/user'
import axiosIntance from '../utils/axioInstance'

interface Props {
  children: ReactElement
}

interface ContextType {
  user: userType | null
  isLogged: boolean
  token: string | null
  handleSetToken: (token: string | null) => void
  handleSetUser: (user: userType | null) => void
  handleLogOut: () => void
}

const SessionContext = createContext<ContextType>({
  user: null,
  isLogged: true,
  token: null,
  handleSetToken: () => {},
  handleSetUser: () => {},
  handleLogOut: () => {}
})

export default function SessionContextHook({ children }: Props): ReactElement {
  const [user, setUser] = useState<userType | null>(null)
  const [logged, setLogged] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const { handleSetSecureValue, getSecureStorage } = useSecureStorage()

  const handleSetToken = async (token: string | null): Promise<void> => {
    setToken(token)
    if (token) {
      await handleSetSecureValue(storageKeys.token, token)
    }
  }

  const handleSetUser = async (user: userType | null): Promise<void> => {
    if (user) {
      console.log('context', user)
      await handleSetSecureValue(storageKeys.user, JSON.stringify(user))
      setUser(user)
    }
  }

  const tryLogin = async (): Promise<void> => {
    const token = await getSecureStorage(storageKeys.token)
    const user = await getSecureStorage(storageKeys.user)
    if (token && user) {
      setToken(token)
      setUser(JSON.parse(user) as userType)
    }
  }

  const handleLogOut = async (): Promise<void> => {
    await handleSetSecureValue(storageKeys.token, '')
    await handleSetSecureValue(storageKeys.user, '')
    setToken(null)
    setUser(null)
  }

  useEffect(() => {
    if (token) {
      setLogged(true)
      axiosIntance.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
      setLogged(false)
    }
  }, [token])

  useEffect(() => {
    tryLogin()
  }, [])

  return (
    <SessionContext.Provider
      value={{
        user,
        isLogged: logged,
        token,
        handleSetToken,
        handleSetUser,
        handleLogOut
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export const useSession = (): ContextType => {
  const context = useContext(SessionContext)
  if (!context) {
    throw new Error('useSession must be used within a SessionContext')
  }

  return context
}
