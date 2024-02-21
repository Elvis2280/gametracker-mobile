import React, { type ReactElement } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Avatar, ScrollView, Text, View, XStack, YStack } from 'tamagui'
import useLogin from '../login/hooks/useLogin'
import { useSession } from '../../contex/SessionContext'
import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters'
import { GameCard } from '../../components/GameCard/GameCard'
import AddGame from './components/AddGame'
import { useGetGames } from './hooks/useGetGames'
import { EditGame } from './components/EditGame'

export default function Home(): ReactElement {
  const { handleLogOut } = useLogin()
  const { user } = useSession()
  const { data: games, refetch: getGames } = useGetGames()

  return (
    <SafeViewStyled>
      <YStack height="100%" marginHorizontal={'$4'}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >
          {/* Header */}
          <XStack
            backgroundColor={'$blue1'}
            paddingVertical={'$2'}
            alignItems={'center'}
            height={'$6'}
          >
            <Text
              flex={1}
              fontSize={'$8'}
              fontWeight={'bold'}
              textAlign={'center'}
            >
              Gametracker
            </Text>
            <Avatar
              position={'absolute'}
              right={0}
              onPress={handleLogOut}
              circular
              backgroundColor={'$blue4'}
            >
              <Text fontSize={'$6'} fontWeight={'bold'}>
                {user?.username.charAt(0)}
              </Text>
            </Avatar>
          </XStack>
          {/* body */}
          <View
            position={'relative'}
            flex={1}
            marginTop={'$6'}
            paddingBottom={'$2'}
          >
            {/* search Section */}
            <XStack space={'$4'}>
              <View flex={1}>
                <SearchBar
                  handleSearch={() => {}}
                  placeholder={'Search in your game list'}
                />
              </View>
              <Filters />
            </XStack>

            {/* Games Cards */}
            <View marginTop={'$4'}>
              <Text fontSize={'$6'} fontWeight={'bold'} paddingBottom={'$2'}>
                Games List
              </Text>
              <YStack space={'$4'}>
                {games?.map((game, i) => {
                  return (
                    <GameCard
                      editGameButton={
                        <EditGame handleOnSuccess={getGames} game={game} />
                      }
                      key={i}
                      game={game}
                    />
                  )
                })}
              </YStack>
            </View>
          </View>
        </ScrollView>

        <AddGame onSuccessCallback={getGames} />
      </YStack>
    </SafeViewStyled>
  )
}
