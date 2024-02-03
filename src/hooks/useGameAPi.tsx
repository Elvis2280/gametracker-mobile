import { gamesApi } from '../utils/axioInstance'
import { useEffect, useState } from 'react'
import {
  type gameFormattedData,
  type GamesResultsData
} from '../types/gamesAPITypes'
import { useMutation } from 'react-query'

const useGameAPi = (): customHooksProps => {
  const [games, setGames] = useState<gameFormattedData[] | []>([])
  const [selectedGame, setSelectedGame] = useState<gameFormattedData | null>(
    null
  )

  console.log(selectedGame)

  const {
    data: gamesResultData,
    isLoading,
    isSuccess,
    mutate,
    reset
  } = useMutation(
    'games',
    async (searchKey: string) => {
      if (searchKey.length > 2) return await handleSearchGameByName(searchKey)
    },
    {
      onMutate: async (searchString: string) => {
        if (searchString.length < 3) {
          resetGamesData()
        }
      }
    }
  )
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
          id: game.id,
          name: game.name,
          image: game.background_image,
          score: game.metacritic
        }
      })

      gamesFormatted ? setGames(gamesFormatted) : setGames([])
    }
  }, [gamesResultData])

  const handleSelectGame = (id: number): void => {
    const selectedGame = games.find((game) => game.id === id)
    if (selectedGame) {
      setSelectedGame(selectedGame)
    } else {
      setSelectedGame(null)
    }
  }

  const isReadyToRender = isSuccess || isLoading

  return {
    handleSearchGameByName: mutate,
    isLoading,
    games,
    isReadyToRender,
    resetGamesData,
    handleSelectGame,
    selectedGame
  }
}

interface customHooksProps {
  handleSearchGameByName: (searchText: string) => void
  isLoading: boolean
  games: gameFormattedData[] | []
  isReadyToRender: boolean
  resetGamesData: () => void
  handleSelectGame: (id: number) => void
  selectedGame?: gameFormattedData | null
}

export default useGameAPi
