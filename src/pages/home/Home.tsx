import React, { type ReactElement } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Text } from 'tamagui'

export default function Home(): ReactElement {
  return (
    <SafeViewStyled>
      <Text>Home</Text>
    </SafeViewStyled>
  )
}
