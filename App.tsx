import React from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import { QueryClient, QueryClientProvider } from 'react-query'
import Toast from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import tamaguiConfig from './tamagui.config'
import Login from './src/pages/login/Login'
import Signup from './src/pages/signup/Signup'

export default function App(): React.ReactElement {
  // Create a client
  const queryClient = new QueryClient()
  // Create a navigator
  const Stack = createNativeStackNavigator()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TamaguiProvider config={tamaguiConfig}>
          <Theme name={'blue_alt1'}>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                  headerShown: false
                }}
              >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </Stack.Navigator>
            </NavigationContainer>
          </Theme>
        </TamaguiProvider>
      </QueryClientProvider>
      <Toast />
    </>
  )
}
