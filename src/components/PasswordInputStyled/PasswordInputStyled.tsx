import React, { useState, type ReactElement } from 'react'
import { Input, View } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

export default function PasswordInputStyled(): ReactElement {
  const [isSecure, setIsSecure] = useState(false)
  return (
    <View position="relative">
      <Input secureTextEntry={true} placeholder="Password" />
      <View
        position="absolute"
        w="$4"
        backgroundColor={'red'}
        display="flex"
        justifyContent="center"
        alignItems="center"
        onPress={() => {
          setIsSecure(!isSecure)
        }}
      >
        <Ionicons name="eye" size={32} color={'white'} />
      </View>
    </View>
  )
}
