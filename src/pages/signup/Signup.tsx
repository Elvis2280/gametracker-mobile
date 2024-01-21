import React, { type ReactElement } from 'react'
import SafeViewStyled from '../../components/SafeViewStyled/SafeViewStyled'
import { Button, Input, Text, View, YStack } from 'tamagui'
import PasswordInputStyled from '../../components/PasswordInputStyled/PasswordInputStyled'
import { Controller, useForm } from 'react-hook-form'
import {
  emailValidation,
  passwordValidation
} from '../../utils/validationspatterns'

export default function Signup(): ReactElement {
  // Hook form settings
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  })

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
                maxLength: 50
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Name"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="name"
            />
            <Text color={'$red11'} py={'$2'}>
              {Boolean(errors.email) && errors.name?.message}
            </Text>

            <Controller
              control={control}
              rules={{
                required: true,
                maxLength: 50,
                pattern: {
                  value: emailValidation,
                  message: 'Please enter a valid email'
                }
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
                required: true,
                maxLength: 50,
                minLength: 8,
                pattern: {
                  value: passwordValidation,
                  message:
                    'Password must contain at least 1 uppercase and 1 number character'
                }
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
              {Boolean(errors.email) && errors.password?.message}
            </Text>
          </YStack>
        </View>
        {/* Footer Buttons */}
        <YStack space={'$4'}>
          <Button onPress={handleSubmit(() => {})}>
            <Text>Sign up</Text>
          </Button>
          <Button variant="outlined">
            <Text>Go to Login</Text>
          </Button>
        </YStack>
      </View>
    </SafeViewStyled>
  )
}
