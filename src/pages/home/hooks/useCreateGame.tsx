import { useMutation } from 'react-query'
import { type CreateGameType } from '../../../types/games'
import axiosIntance from '../../../utils/axioInstance'
import { useEffect } from 'react'
import Toast from 'react-native-toast-message'
import { iconByPlatform } from '../../../utils/constants'
import { useSession } from '../../../contex/SessionContext'
import axios from 'axios'

export const useCreateGame = (): customHooksProps => {
  const { user } = useSession()
  const { mutate, isSuccess, isLoading, isError, error } = useMutation(
    'createGame',
    async (gameData: CreateGameType) => {
      const platformsWithIcons = gameData.platforms.map((platform) => {
        return {
          name: platform,
          iconname: iconByPlatform.get(platform)
        }
      })

      const tagsStructured = gameData.tags.map((tag) => {
        return {
          name: tag
        }
      })

      return await axiosIntance.post('games', {
        description: gameData.description,
        image: gameData.image,
        name: gameData.name,
        tags: tagsStructured,
        platforms: platformsWithIcons,
        status: gameData.status,
        email: user?.email
      })
    }
  )

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Game created! 🎉'
      })
    }
  }, [isSuccess]) // handle success message toast

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: axios.isAxiosError(error)
          ? error?.response?.data.error
          : 'Something went wrong 🤔'
      })
    }
  }, [isError]) // handle error message toast

  return {
    handleCreateGame: mutate,
    isLoading
  }
}

interface customHooksProps {
  handleCreateGame: (data: CreateGameType) => void
  isLoading: boolean
}
