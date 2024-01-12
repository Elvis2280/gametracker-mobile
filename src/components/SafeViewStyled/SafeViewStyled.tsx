import React, { type ReactElement } from 'react'
import { SafeAreaView } from 'react-native'
import { View } from 'tamagui'

interface Props {
  children: ReactElement
}

export default function SafeViewStyled({ children }: Props): ReactElement {
  return (
    <View minHeight={'100%'} backgroundColor={'$blue1'}>
      <SafeAreaView>{children}</SafeAreaView>
    </View>
  )
}
