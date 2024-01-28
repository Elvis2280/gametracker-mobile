import React, { type ReactElement } from 'react'
import { Button, View } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

const Filters = (): ReactElement => {
  return (
    <View>
      <Button icon={<Ionicons name={'filter'} size={24} color={'white'} />} />
    </View>
  )
}
export default Filters
