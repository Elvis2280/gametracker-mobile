import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Toast from 'react-native-toast-message'
import SessionContex from './src/contex/SessionContex'
import Router from './src/router/Router'
import TamaguiConfigWrapper from './src/utils/TamaguiConfigWrapper'

export default function App(): React.ReactElement {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TamaguiConfigWrapper>
          <SessionContex>
            <Router />
          </SessionContex>
        </TamaguiConfigWrapper>
      </QueryClientProvider>
      <Toast />
    </>
  )
}
