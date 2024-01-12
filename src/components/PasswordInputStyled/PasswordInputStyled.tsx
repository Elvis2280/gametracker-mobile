import React, { useState, type ReactElement } from 'react'
import { Input, View } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

export default function PasswordInputStyled(): ReactElement {
  const [isSecure, setIsSecure] = useState(false)
  return (
    <View position="relative">
      <Input secureTextEntry={isSecure} placeholder="Password" />
      <View
        position="absolute"
        w="$4"
        display="flex"
        justifyContent="center"
        alignItems="center"
        right={10}
        top={'$2'}
      >
        <Ionicons
          onPress={() => {
            setIsSecure(!isSecure)
          }}
          name={isSecure ? 'eye-off' : 'eye'}
          size={28}
          color={'lightgrey'}
        />
      </View>
    </View>
  )
}
