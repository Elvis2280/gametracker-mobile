import React, { type ReactElement } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Avatar, Button, Text, View, XStack } from 'tamagui'
import useLogin from '../login/hooks/useLogin'
import { useSession } from '../../contex/SessionContex'

export default function Home(): ReactElement {
  const { handleLogOut } = useLogin()
  const { user } = useSession()
  console.log(user)
  return (
    <SafeViewStyled>
      <View marginHorizontal={'$4'}>
       <XStack alignItems={'center'} height={'$4'} >
         <Text flex={1} fontSize={'$8'} fontWeight={'bold'} textAlign={'center'} >Gametracker</Text>
          <Avatar position={'absolute'} right={0} onPress={handleLogOut} circular backgroundColor={'$blue4'}>
            <Text fontSize={'$6'} fontWeight={'bold'}>E</Text>
          </Avatar>
       </XStack>
      </View>
    </SafeViewStyled>
  )
}
