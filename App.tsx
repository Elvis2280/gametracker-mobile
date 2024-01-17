import React from 'react'
import Toast from 'react-native-toast-message'
import SessionContex from './src/contex/SessionContex'
import Router from './src/router/Router'
import TamaguiConfigWrapper from './src/utils/TamaguiConfigWrapper'

export default function App(): React.ReactElement {
  return (
    <>
      <TamaguiConfigWrapper>
        <SessionContex>
          <Router />
        </SessionContex>
      </TamaguiConfigWrapper>
      <Toast />
    </>
  )
}
