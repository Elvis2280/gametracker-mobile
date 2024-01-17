import React, { type ReactElement } from 'react'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSession } from '../contex/SessionContex'

export default function Router(): ReactElement {
  const Stack = createNativeStackNavigator()

  const { isLogged } = useSession()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        {
          // eslint-disable-next-line multiline-ternary
          isLogged ? (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
