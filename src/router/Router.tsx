import React, { type ReactElement } from 'react'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import { NavigationContainer } from '@react-navigation/native'
import { useSession } from '../contex/SessionContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// eslint-disable-next-line
type ListRoute = {
  Home: undefined
  Login: undefined
  Signup: undefined
}

const RootStack = createNativeStackNavigator<ListRoute>()

export default function Router(): ReactElement {
  const { isLogged } = useSession()

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={isLogged ? 'Home' : 'Login'}
        screenOptions={{
          headerShown: false
        }}
      >
        {
          // eslint-disable-next-line multiline-ternary
          isLogged ? (
            <>
              <RootStack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <RootStack.Screen name="Login" component={Login} />
              <RootStack.Screen name="Signup" component={Signup} />
            </>
          )
        }
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
