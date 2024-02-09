import { Circle, Text, XStack } from 'tamagui'
import React, { type ReactElement } from 'react'

interface Props {
  text: string
  colors: string
}

export const StatusBadge = ({ text, colors }: Props): ReactElement => {
  return (
    <XStack
      borderRadius={'$2'}
      paddingHorizontal={'$1'}
      justifyContent={'center'}
      alignItems={'center'}
      space={'$2'}
    >
      <Circle width={8} height={8} backgroundColor={colors} />
      <Text fontSize={'$4'}>{text}</Text>
    </XStack>
  )
}
