import React, { useState, type ReactElement } from 'react'
import { Input, View } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

interface Props {
  onChange: (text: string) => void
  onBlur: () => void
  value: string
}

export default function PasswordInputStyled({
  onBlur,
  onChange,
  value
}: Props): ReactElement {
  const [isSecure, setIsSecure] = useState(true)
  return (
    <View position="relative">
      <Input
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        secureTextEntry={isSecure}
        placeholder="Password"
      />
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
