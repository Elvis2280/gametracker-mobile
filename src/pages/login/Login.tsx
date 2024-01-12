import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import React, { type ReactElement } from 'react'
import PasswordInputStyled from '../../components/PasswordInputStyled/PasswordInputStyled'
import { YStack, Text, View, Input, Button } from 'tamagui'

export default function Login(): ReactElement {
  return (
    <SafeViewStyled>
      <YStack height={'100%'} justifyContent="space-between" mx={'$4'}>
        <Text fontSize={'$8'} fontWeight={'bold'} textAlign="center">
          GameTracker
        </Text>
        <View>
          <Text
            pb={'$8'}
            fontSize={'$6'}
            fontWeight={'bold'}
            textAlign="center"
          >
            Welcome Back!
          </Text>
          <YStack space={'$5'}>
            <Input placeholder="Email" />
            <PasswordInputStyled />
          </YStack>
        </View>
        <View space={'$4'}>
          <Button>
            <Text>Login</Text>
          </Button>
          <Button variant="outlined">
            <Text>Sign up</Text>
          </Button>
        </View>
      </YStack>
    </SafeViewStyled>
  )
}
