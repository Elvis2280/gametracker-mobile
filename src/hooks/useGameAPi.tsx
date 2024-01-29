import { gamesApi } from '../utils/axioInstance'
import { useEffect, useState } from 'react'
import {
  type gameFormattedData,
  type GamesResultsData
} from '../types/gamesAPITypes'
import { useMutation } from 'react-query'

const useGameAPi = (): customHooksProps => {
  const [games, setGames] = useState<gameFormattedData[] | []>([])

  const {
    data: gamesResultData,
    isLoading,
    isSuccess,
    mutate,
    reset
  } = useMutation(async (searchKey: string) => {
    return await handleSearchGameByName(searchKey)
  })
  const handleSearchGameByName = async (
    searchText: string
  ): Promise<GamesResultsData> => {
    const response = await gamesApi.get('games', {
      params: {
        search: searchText
      }
    })
    return response.data
  }

  const resetGamesData = (): void => {
    setGames([])
    reset()
  }

  useEffect(() => {
    if (isSuccess) {
      const gamesFormatted = gamesResultData?.results.map((game) => {
        return {
          name: game.name,
          image: game.background_image,
          score: game.metacritic
        }
      })

      setGames(gamesFormatted)
    }
  }, [gamesResultData])

  const isReadyToRender = isSuccess || isLoading

  return {
    handleSearchGameByName: mutate,
    isLoading,
    games,
    isReadyToRender,
    resetGamesData
  }
}

interface customHooksProps {
  handleSearchGameByName: (searchText: string) => void
  isLoading: boolean
  games: gameFormattedData[] | []
  isReadyToRender?: boolean
  resetGamesData?: () => void
}

export default useGameAPi
