import React, { type ReactElement } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors, sizes } from '../../utils/theme'
import Input from '../../components/Input/Input'

export default function Login(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>GameTracker</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.textWelcome}>Welcome Back!</Text>
        <Input type="text" />
        <Input type="password" />
      </View>
      <View>
        <Text style={styles.textWelcome}>Button</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: 'space-between',
    width: '100%'
  },
  inputsContainer: {
    paddingHorizontal: sizes.spacing.medium,
    rowGap: sizes.spacing.medium,
    width: '100%'
  },
  logo: {
    color: colors.text,
    fontSize: sizes.text.xlarge,
    fontWeight: 'bold'
  },
  textWelcome: {
    color: colors.text,
    fontSize: sizes.text.large,
    fontWeight: 'bold',
    marginBottom: sizes.spacing.small,
    textAlign: 'center'
  }
})
