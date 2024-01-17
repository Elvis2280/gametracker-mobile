import React, { useState, type ReactElement } from 'react'
import { Input, View } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { Pressable } from 'react-native'

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
  const [textValue, setTextValue] = useState(value)

  const handleOnChange = (text: string): void => {
    setTextValue(text)
    onChange(text)
  }
  return (
    <View position="relative">
      <Input
        testID="password-input"
        onChangeText={handleOnChange}
        onBlur={onBlur}
        value={textValue}
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
        <Pressable
          testID="password-input-toggle"
          onPress={() => {
            setIsSecure(!isSecure)
          }}
        >
          <Ionicons
            name={isSecure ? 'eye-off' : 'eye'}
            size={28}
            color={'lightgrey'}
          />
        </Pressable>
      </View>
    </View>
  )
}
