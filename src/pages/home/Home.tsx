import React, { type ReactElement } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Button, Text, View } from 'tamagui'
import useLogin from '../login/hooks/useLogin'

export default function Home(): ReactElement {
  const { handleLogOut } = useLogin()
  return (
    <SafeViewStyled>
      <View>
        <Text>Home</Text>
        <Button onPress={handleLogOut}>
          <Text>Logout</Text>
        </Button>
      </View>
    </SafeViewStyled>
  )
}
