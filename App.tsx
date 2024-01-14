import Login from './src/pages/login/Login'
import React from 'react'
import { TamaguiProvider, Theme, View } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import { QueryClient, QueryClientProvider } from 'react-query'
import Toast from 'react-native-toast-message'

export default function App(): React.ReactElement {
  // Create a client
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig}>
          <Theme name={'blue_alt1'}>
            <View>
              <Login />
            </View>
          </Theme>
        </TamaguiProvider>
      </QueryClientProvider>
      <Toast />
    </>
  )
}
