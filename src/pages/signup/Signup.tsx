import React, { type ReactElement, useEffect } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Button, Input, Text, View, YStack } from 'tamagui'
import PasswordInputStyled from '../../components/PasswordInputStyled/PasswordInputStyled'
import { Controller, useForm } from 'react-hook-form'
import type { NotAuthNavigationProps } from '../login/types'
import { useSignUp } from './hooks/UseSignUp'

export default function Signup(router: NotAuthNavigationProps): ReactElement {
  const { signupHandler, isSuccess, isLoading } = useSignUp()
  // Hook form settings
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  })

  useEffect(() => {
    if (isSuccess) {
      router.navigation.navigate('Login')
    }
  }, [isSuccess])

  return (
    <SafeViewStyled>
      <View
        height={'100%'}
        display="flex"
        justifyContent="space-between"
        mx={'$4'}
      >
        {/* Title */}
        <Text fontSize={'$8'} fontWeight={'bold'} textAlign="center">
          GameTracker
        </Text>
        {/* Form Section */}
        <View>
          <Text fontWeight={'bold'} fontSize={'$6'} textAlign="center" mb="$6">
            Create your account
          </Text>
          <YStack>
            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 50,
                minLength: 3

              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Name"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="username"
            />
            <Text color={'$red11'} py={'$2'}>
              {Boolean(errors.email) && 'Name is required'}
            </Text>

            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 50

              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Email"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="email"
            />
            <Text color={'$red11'} py={'$2'}>
              {Boolean(errors.email) && 'Email is required'}
            </Text>

            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 50,
                minLength: 8

              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInputStyled
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="password"
            />
            <Text color={'$red11'} py={'$2'}>
              {Boolean(errors.email) && 'Password is required'}
            </Text>
          </YStack>
        </View>
        {/* Footer Buttons */}
        <YStack space={'$4'}>
          <Button disabled={isLoading} onPress={handleSubmit(signupHandler)}>
            <Text>Sign up</Text>
          </Button>
          <Button disabled={isLoading} onPress={() => {
            router.navigation.navigate('Login')
          }} variant="outlined">
            <Text>Go to Login</Text>
          </Button>
        </YStack>
      </View>
    </SafeViewStyled>
  )
}
