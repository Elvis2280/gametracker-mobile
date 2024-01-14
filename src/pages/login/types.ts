import { type userType } from '../../types/user'
import { type axiosResponseType } from '../../types/types'

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
