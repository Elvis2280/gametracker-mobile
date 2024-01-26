import React, {
  createContext,
  useState,
  type ReactElement,
  useEffect,
  useContext
} from 'react'
import useSecureStorage from '../../src/hooks/useStorage'
import { storageKeys } from '../utils/constants'
import { type userType } from '../types/user'

interface Props {
  children: ReactElement
}

interface ContextType {
  user: userType | null
  isLogged: boolean
  token: string | null
  handleSetToken: (token: string | null) => void
  handleSetUser: (user: userType | null) => void
}

const SessionContext = createContext<ContextType>({
  user: null,
  isLogged: true,
  token: null,
  handleSetToken: () => {},
  handleSetUser: () => {}
})

export default function SessionContex({ children }: Props): ReactElement {
  const [user, setUser] = useState<userType | null>(null)
  const [logged, setLogged] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)
  const { handleSetSecureValue, getSecureStorage } = useSecureStorage()

  const handleSetToken = async (token: string | null): Promise<void> => {
    setToken(token)
    if (token) {
      handleSetSecureValue(storageKeys.token, token)
    }
  }

  const handleSetUser = async (user: userType | null): Promise<void> => {
    if (user) {
      handleSetSecureValue(storageKeys.user, JSON.stringify(user))
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

  useEffect(() => {
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }, [token])

  useEffect(() => {
    tryLogin()
  }, [])

  return (
    <SessionContext.Provider
      value={{ user, isLogged: logged, token, handleSetToken, handleSetUser }}
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
