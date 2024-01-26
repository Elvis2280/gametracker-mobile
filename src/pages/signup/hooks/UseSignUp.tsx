import { type userSignUpDataType } from '../../../types/user'
import {useMutation} from 'react-query'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import axiosIntance from '../../../utils/axioInstance'
export const useSignUp = (): signUpHookTypes => {
  const { isError, isLoading, mutate, isSuccess } = useMutation(async (data: userSignUpDataType) => {
    return await axiosIntance.post('/api/signup', data)
  })

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

    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Please log in! 🎉'
      })
    }
  }, [isError, isSuccess])
  return (
    {
      signupHandler: mutate,
      isLoading,
      isSuccess
    }
  )
}

interface signUpHookTypes {
  signupHandler: (data: userSignUpDataType) => void
  isLoading: boolean
  isSuccess: boolean
}
