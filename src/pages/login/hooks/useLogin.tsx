import { useEffect } from 'react'
import { useMutation } from 'react-query'
import axiosIntance from '../../../utils/axioInstance'
import { type loginDataType } from '../types'
import Toast from 'react-native-toast-message'
import { useSession } from '../../../contex/SessionContext'
import { type userType } from '../../../types/user'

export default function useLogin(): {
  handleLogin: (data: loginDataType) => void
  handleLogOut: () => void
  isLoading: boolean
} {
  const { handleSetToken, handleSetUser, handleLogOut: logout } = useSession()
  const { isError, error, mutate, isSuccess, data, isLoading } = useMutation(
    async (data: loginDataType) => {
      return await axiosIntance.post('login', data)
    }
  )
  const handleLogOut = async (): Promise<void> => {
    logout()
  }

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong 🤔',
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        // @ts-expect-error FIXME: Object is possibly 'undefined'.
        text2: error?.response.data.error || 'Please try again later'
      })
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
      handleSetToken(data.data.token as string)
      handleSetUser(data.data.userdata as userType)

      Toast.show({
        type: 'success',
        text1: 'Welcome back! 🎉'
      })
    }
  }, [isSuccess])
  return {
    handleLogin: mutate,
    handleLogOut,
    isLoading
  }
}
