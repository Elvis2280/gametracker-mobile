import React, { type ReactElement } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Avatar, Text, View, XStack, YStack } from 'tamagui'
import useLogin from '../login/hooks/useLogin'
import { useSession } from '../../contex/SessionContex'
import SearchBar from '../../components/SearchBar/SearchBar'
import Filters from '../../components/Filters/Filters'
import { GameCard } from '../../components/GameCard/GameCard'
import AddGame from './components/AddGame'

export default function Home(): ReactElement {
  const { handleLogOut } = useLogin()
  const { user } = useSession()
  console.log(user)
  return (
    <SafeViewStyled>
      <YStack height='100%' marginHorizontal={'$4'}>
        {/* Header */}
       <XStack alignItems={'center'} height={'$4'} >
         <Text flex={1} fontSize={'$8'} fontWeight={'bold'} textAlign={'center'} >Gametracker</Text>
          <Avatar position={'absolute'} right={0} onPress={handleLogOut} circular backgroundColor={'$blue4'}>
            <Text fontSize={'$6'} fontWeight={'bold'}>{user?.username.charAt(0)}</Text>
          </Avatar>
       </XStack>
        {/* body */}
        <View position={'relative'} flex={1} marginTop={'$6'} paddingBottom={'$2'}>
          {/* search Section */}
          <XStack space={'$4'}>
           <View flex={1}>
             <SearchBar handleSearch={() => {}} placeholder={'Search in your game list'} />
           </View>
            <Filters />
          </XStack>

          {/* Games Cards */}
          <View marginTop={'$4'}>
            <Text fontSize={'$6'} fontWeight={'bold'} paddingBottom={'$2'}>Games List</Text>
            <GameCard />
          </View>

          <View width={'100%'} position={'absolute'} bottom={8}>
            <AddGame />
          </View>
        </View>
      </YStack>
    </SafeViewStyled>
  )
}
