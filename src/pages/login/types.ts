/* eslint-disable @typescript-eslint/indent */
import { type userType } from '../../types/user'
import { type axiosResponseType } from '../../types/types'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

export interface loginDataType {
  email: string
  password: string
}

export interface queryLoginType {
  isError: boolean
  isLoading: boolean
  isSuccess: boolean
  data: axiosResponseType<userType>
  error: axiosResponseType<{ message: string }>
  mutate: (data: loginDataType) => void
}

interface RootStackParamList {
  [key: string]: undefined
  Login: undefined
  signUp: undefined
}

export type NotAuthNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Login',
  'signUp'
>
