import {
  Button,
  Dialog,
  Form,
  Input,
  Text,
  TextArea,
  Unspaced,
  View,
  XStack,
  YStack
} from 'tamagui'
import React, { type ReactElement, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import useGameAPi from '../../../hooks/useGameAPi'
import { Controller, useForm } from 'react-hook-form'
import SearchBarWithItems from './SearchBarWithItems'

export const AddGame = (): ReactElement => {
  const [open, setOpen] = React.useState(false)
  const {
    handleSearchGameByName,
    games,
    isLoading,
    isReadyToRender,
    resetGamesData,
    handleSelectGame,
    selectedGame
  } = useGameAPi()

  const { control, setValue, reset } = useForm({
    defaultValues: {
      name: selectedGame?.name,
      description: '',
      image: selectedGame?.image
    }
  }) // TODO: add handler submit and errors to form

  const handleClose = (): void => {
    setOpen(false)
    if (resetGamesData) {
      resetGamesData()
      reset()
    }
  }

  useEffect(() => {
    if (selectedGame) {
      setValue('name', selectedGame.name)
      setValue('image', selectedGame.image)
    }
  }, [selectedGame])

  return (
    <View>
      <Dialog modal open={open}>
        <Dialog.Trigger asChild>
          <Button
            onPress={() => {
              setOpen(true)
            }}
          >
            <Text fontSize={'$6'} fontWeight={'bold'}>
              Add Game
            </Text>
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay key="overlay" animation="quick" opacity={0.5} />

          <Dialog.Content bordered elevate key={'content'}>
            <Dialog.Title>
              <Text fontSize={'$6'} fontWeight={'bold'}>
                Add Game
              </Text>
            </Dialog.Title>
            <Dialog.Description>
              <Text fontSize={'$5'}>
                Search and add your favorite game to your list
              </Text>
            </Dialog.Description>
            <View marginTop={'$4'} position={'relative'}>
              {/* search game  */}
              <SearchBarWithItems
                isLoading={isLoading}
                isReadyToRender={isReadyToRender}
                games={games}
                handleSelectGame={handleSelectGame}
                handleSearchGameByName={handleSearchGameByName}
              />
            </View>
            <Form
              marginTop={'$6'}
              onSubmit={() => {}}
              position={'relative'}
              zIndex={-20}
            >
              <YStack space={'$2'}>
                <Text>Name</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 50
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                  name="name"
                />

                <Input display={'none'} value={selectedGame?.image} />
                <Text>Description</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true,
                    maxLength: 50
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextArea
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      height={80}
                    />
                  )}
                  name="description"
                />
              </YStack>
            </Form>

            <Unspaced key={'close'}>
              <Dialog.Close asChild>
                <Button
                  onPress={handleClose}
                  position="absolute"
                  top="$2"
                  right="$2"
                  zIndex={100000}
                  size={'$2'}
                  circular
                  icon={
                    <Ionicons name={'close'} size={16} color={'lightgrey'} />
                  }
                />
              </Dialog.Close>
            </Unspaced>

            {/* Footer */}
            <XStack marginTop={'$4'} justifyContent={'space-between'}>
              <Button variant={'outlined'} onPress={handleClose}>
                <Text fontSize={'$6'} fontWeight={'bold'}>
                  Cancel
                </Text>
              </Button>
              <Button onPress={() => {}}>
                <Text fontSize={'$6'} fontWeight={'bold'}>
                  Save Game
                </Text>
              </Button>
            </XStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  )
}

export default AddGame
