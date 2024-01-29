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
    mutate
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
  return {
    handleSearchGameByName: mutate,
    isLoading,
    games
  }
}

interface customHooksProps {
  handleSearchGameByName: (searchText: string) => void
  isLoading: boolean
  games: gameFormattedData[] | []
}

export default useGameAPi
