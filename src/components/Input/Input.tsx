import React, { type ReactElement } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, sizes } from '../../utils/theme'
import { RadixIcon } from 'radix-ui-react-native-icons'

interface Props {
  type: 'text' | 'password' | 'number'
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  inputProps?: React.ComponentProps<typeof TextInput>
}

export default function Input({
  type,
  startIcon = null,
  endIcon = null
}: Props): ReactElement | null {
  switch (type) {
    case 'text':
      return (
        <View style={styles.inputContainer}>
          {Boolean(startIcon) && (
            <View style={styles.iconContainer}>{startIcon}</View>
          )}
          <TextInput style={styles.input} inputMode="text" />
          {Boolean(endIcon) && (
            <View style={styles.iconContainer}>{endIcon}</View>
          )}
        </View>
      )
    case 'password':
      return (
        <View style={styles.inputContainer}>
          {Boolean(startIcon) && (
            <View style={styles.iconContainer}>{startIcon}</View>
          )}
          <TextInput style={styles.input} inputMode="text" />
          <View style={styles.iconContainer}>
            <RadixIcon name="eye-open" size={24} color="white" />
          </View>
        </View>
      )
    case 'number':
      return <input type="number" />
    default:
      return null
  }
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    display: 'flex',
    height: 50,
    justifyContent: 'center',
    padding: sizes.spacing.small,
    width: 50
  },
  input: {
    color: colors.text,
    flex: 1,
    fontSize: sizes.text.medium,
    padding: sizes.spacing.medium
  },
  inputContainer: {
    alignItems: 'center',
    borderColor: colors.primary[500],
    borderRadius: 5,
    borderWidth: 1.5,
    display: 'flex',
    flexDirection: 'row',
    rowGap: sizes.spacing.medium,
    width: '100%'
  }
})
