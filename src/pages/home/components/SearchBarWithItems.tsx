import SearchBar from '../../../components/SearchBar/SearchBar'
import { ScrollView, Separator, Spinner, Text, View, YGroup } from 'tamagui'
import React, { type ReactElement } from 'react'
import { type gameFormattedData } from '../../../types/gamesAPITypes'

interface Props {
  isLoading: boolean
  isReadyToRender: boolean
  games: gameFormattedData[] | []
  handleSelectGame: (id: number) => void
  handleSearchGameByName: (searchText: string) => void
}

const SearchBarWithItems = ({
  isLoading,
  isReadyToRender,
  games,
  handleSelectGame,
  handleSearchGameByName
}: Props): ReactElement => {
  return (
    <>
      <SearchBar
        placeholder={'Search game'}
        handleSearch={handleSearchGameByName}
      />

      <View
        display={isReadyToRender ? 'flex' : 'none'}
        top={'100%'}
        maxHeight={200}
        backgroundColor={'$blue4'}
        width={'100%'}
        position={'absolute'}
        marginTop={'$2'}
        borderRadius={'$2'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={'$4'}
      >
        {isLoading
          ? (
          <Spinner color={'$blue12'} />
            )
          : (
          <ScrollView width={'100%'}>
            <YGroup separator={<Separator borderColor={'$blue6'} />}>
              {games?.map((game, index) => {
                return (
                  <YGroup.Item key={game.id}>
                    <Text
                      onPress={() => {
                        if (handleSelectGame) {
                          handleSelectGame(game.id)
                        }
                      }}
                      fontSize={'$5'}
                      paddingVertical={'$2'}
                    >
                      {game.name}
                    </Text>
                  </YGroup.Item>
                )
              })}
            </YGroup>
          </ScrollView>
            )}
      </View>
    </>
  )
}

export default SearchBarWithItems
