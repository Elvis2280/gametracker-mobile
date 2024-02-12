import { useQuery } from 'react-query'
import axiosIntance from '../../../utils/axioInstance'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import { type GameResponseType } from '../../../types/games'
import { useSession } from '../../../contex/SessionContext'

export const useGetGames = (): customHooksProps => {
  const { user } = useSession()
  const { data, error, isError, isLoading, refetch } = useQuery(
    ['games', user?.email],
    async (): Promise<GameResponseType[]> => {
      if (user) {
        const games = await axiosIntance.get('games', {
          params: {
            email: user?.email
          }
        })
        return games.data.games
      }
      return []
    }
  )

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: axios.isAxiosError(error)
          ? error?.response?.data.error
          : 'Something went wrong 🤔'
      })
    }
  }, [isError])

  return {
    data,
    isError,
    isLoading,
    refetch
  }
}

interface customHooksProps {
  data: GameResponseType[] | undefined
  isError: boolean
  isLoading: boolean
  refetch: () => void
}
