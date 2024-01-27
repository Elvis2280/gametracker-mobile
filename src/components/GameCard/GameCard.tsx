import { Card, Circle, Text, View, XStack } from 'tamagui'
import { type ReactElement } from 'react'
import React from 'react'

export const GameCard = (): ReactElement => {
  return (
<View>
  <Card height={300}>
    <Card.Header >
    <XStack>
      {/* icons platform */}
      <XStack></XStack>
      {/* edit button */}
    </XStack>
      <XStack></XStack>
      <XStack></XStack>
    </Card.Header>
    <Card.Footer >
    <Text fontSize={'$6'} fontWeight={'bold'}>Footer</Text>
    </ Card.Footer>
    {/* any other components */}
    <Card.Background display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Circle backgroundColor={'red'} height={200} width={200} />
    </Card.Background>
  </Card>
</View>
  )
}
