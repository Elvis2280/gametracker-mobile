import SearchBar from '../../../components/SearchBar/SearchBar'
import { ScrollView, Separator, Spinner, Text, View, YGroup } from 'tamagui'
import React, { type ReactElement, useState } from 'react'
import { type gameFormattedData } from '../../../types/gamesAPITypes'
import OutsidePressHandler from 'react-native-outside-press'

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
  const [wasSelected, setWasSelected] = useState(false)
  return (
    <OutsidePressHandler
      onOutsidePress={() => {
        setWasSelected(true)
      }}
    >
      <SearchBar
        placeholder={'Search game'}
        handleSearch={handleSearchGameByName}
        callBackWhenSearch={() => {
          setWasSelected(false)
        }}
      />

      <View
        display={isReadyToRender && !wasSelected ? 'flex' : 'none'}
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
                          setWasSelected(true)
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
    </OutsidePressHandler>
  )
}

export default SearchBarWithItems
