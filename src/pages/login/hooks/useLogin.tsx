import { useEffect } from 'react'
import { useMutation } from 'react-query'
import axiosIntance from '../../../utils/axioInstance'
import { type loginDataType } from '../types'
import Toast from 'react-native-toast-message'
import useSecureStorage from '../../../hooks/useStorage'
import { storageKeys } from '../../../utils/constants'

export default function useLogin(): {
  handleLogin: (data: loginDataType) => void
} {
  const { handleSetSecureValue } = useSecureStorage()
  const { isError, error, mutate, isSuccess, data } = useMutation(
    async (data: loginDataType) => {
      return await axiosIntance.post('/auth/login', data)
    }
  )

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong 🤔',
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        // @ts-expect-error FIXME: Object is possibly 'undefined'.
        text2: error?.response?.data?.message || 'Please try again later'
      })
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
      handleSetSecureValue(storageKeys.token, data.data.access_token as string)

      Toast.show({
        type: 'success',
        text1: 'Welcome back! 🎉'
      })
    }
  }, [isSuccess])
  return {
    handleLogin: mutate
  }
}
