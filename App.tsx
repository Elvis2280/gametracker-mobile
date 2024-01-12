import Login from './src/pages/login/Login'
import React from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import tamaguiConfig from './tamagui.config'

export default function App(): React.ReactElement {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={'blue_alt1'}>
        <Login />
      </Theme>
    </TamaguiProvider>
  )
}
