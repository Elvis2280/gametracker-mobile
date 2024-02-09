import { useQuery } from 'react-query'
import axiosIntance from '../../../utils/axioInstance'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import { type GameResponseType } from '../../../types/games'

export const useGetGames = (): customHooksProps => {
  const { data, error, isError, isLoading, refetch } = useQuery(
    'games',
    async (): Promise<GameResponseType[]> => {
      const games = await axiosIntance.get('games')
      return games.data.games
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
