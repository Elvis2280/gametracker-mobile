import React, { type ReactElement } from 'react'
import { Text, View } from 'tamagui'

interface Props {
  text: string
}

export const Badge = ({ text }: Props): ReactElement => {
  return (
    <View
      borderRadius={'$2'}
      paddingVertical={'$1'}
      paddingHorizontal={'$2'}
      backgroundColor={'$blue5'}
    >
      <Text color={'$blue10'}>{text}</Text>
    </View>
  )
}
