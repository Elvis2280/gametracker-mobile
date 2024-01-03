import { StyleSheet, View } from 'react-native'
import Login from './src/pages/login/Login'
import { colors } from './src/utils/theme'
import React from 'react'

export default function App(): React.ReactElement {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    color: colors.text,
    flex: 1
  }
})
