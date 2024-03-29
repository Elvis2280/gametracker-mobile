import React, { type ReactElement } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSession } from '../../contex/SessionContext'

export default function TestSessionContext(): ReactElement {
  const { isLogged, user, token, handleSetToken } = useSession()
  return (
    <View>
      <Text>TestSessionContext</Text>
      <Text testID="isLoggedTest">{isLogged}</Text>
      <Text testID="userTest">{user?.name}</Text>
      <Text testID="tokenTest">{token}</Text>
      <Pressable
        testID="setToken"
        onPress={() => {
          handleSetToken('token')
        }}
      />
    </View>
  )
}
