import { gamesApi } from '../utils/axioInstance'
import { useState } from 'react'

const useGameAPi = (): customHooksProps => {
  const [games, setGames] = useState([])
  const handleSearchGameByName = async (searchText: string): Promise<void> => {
    const gamesByName = await gamesApi.get('games', {
      params: {
        search: searchText
      }
    })

    console.log(gamesByName)
  }
  return {
    handleSearchGameByName
  }
}

interface customHooksProps {
  handleSearchGameByName: (searchText: string) => void
}

export default useGameAPi
