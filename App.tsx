import React from 'react'
import Toast from 'react-native-toast-message'
import SessionContext from './src/contex/SessionContext'
import Router from './src/router/Router'
import TamaguiConfigWrapper from './src/utils/TamaguiConfigWrapper'
import { EventProvider } from 'react-native-outside-press'

export default function App(): React.ReactElement {
  return (
    <>
      <EventProvider>
        <TamaguiConfigWrapper>
          <SessionContext>
            <Router />
          </SessionContext>
        </TamaguiConfigWrapper>
        <Toast />
      </EventProvider>
    </>
  )
}
