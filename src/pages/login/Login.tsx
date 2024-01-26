import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import React, { type ReactElement } from 'react'
import PasswordInputStyled from '../../components/PasswordInputStyled/PasswordInputStyled'
import { YStack, Text, View, Input, Button } from 'tamagui'
import { useForm, Controller } from 'react-hook-form'
import useLogin from './hooks/useLogin'
import { type NotAuthNavigationProps } from './types'
// import { passwordValidation } from '../../utils/validationspatterns'

export default function Login(router: NotAuthNavigationProps): ReactElement {
  const { handleLogin, isLoading } = useLogin()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  return (
    <SafeViewStyled>
      <YStack height={'100%'} justifyContent="space-between" mx={'$4'}>
        <Text fontSize={'$8'} fontWeight={'bold'} textAlign="center">
          GameTracker
        </Text>
        <View>
          <Text
            pb={'$8'}
            fontSize={'$6'}
            fontWeight={'bold'}
            textAlign="center"
          >
            Welcome Back!
          </Text>
          <YStack>
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
              {Boolean(errors.email) && errors.email?.message}
            </Text>
            <Controller
              control={control}
              rules={{
                required: true
                // minLength: 8,
                // maxLength: 50,
                // pattern: {
                //   value: passwordValidation,
                //   message:
                //     'Password must have at least 8 characters, one number and one Uppercase letter'
                // }
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInputStyled
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            <Text color={'$red11'} py={'$2'}>
              {Boolean(errors.email) && errors.password?.message}
            </Text>
          </YStack>
        </View>
        <View space={'$4'}>
          <Button disabled={isLoading} onPressIn={handleSubmit(handleLogin)}>
            <Text>Login</Text>
          </Button>
          <Button
            disabled={isLoading}
            onPress={() => {
              router.navigation.navigate('Signup')
            }}
            variant="outlined"
          >
            <Text>Sign up</Text>
          </Button>
        </View>
      </YStack>
    </SafeViewStyled>
  )
}
