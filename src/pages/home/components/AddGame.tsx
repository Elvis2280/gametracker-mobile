import {
  Button,
  Dialog,
  Input,
  RadioGroup,
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
import {
  gameCategories,
  gameStatus,
  platoformsOptions
} from '../../../utils/constants'
import { RadiogroupWithLabel } from '../../../components/RadiogroupWithLabel/RadiogroupWithLabel'
import { Multiselect } from '../../../components/Multiselect/Multiselect'
import { useCreateGame } from '../hooks/useCreateGame'
import { type CreateGameType } from '../../../types/games'

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

  const { handleCreateGame, isLoading: isCreateLoading } = useCreateGame()

  const { control, setValue, reset, handleSubmit } = useForm({
    defaultValues: {
      name: selectedGame?.name ?? '',
      description: '',
      image: selectedGame?.image ?? '',
      score: selectedGame?.score ?? 0,
      status: gameStatus.notStarted,
      platforms: [] as string[] | [],
      tags: [] as string[] | []
    }
  }) // TODO: handle errors and validations

  const onSubmit = (data: CreateGameType): void => {
    handleCreateGame(data)
    reset()
    handleClose()
  }

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
      setValue('score', selectedGame.score || 0)
    }
  }, [selectedGame])

  return (
    <View width={'100%'}>
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

          <Dialog.Content width={'100%'} bordered elevate key={'content'}>
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

            <YStack marginTop={'$4'} zIndex={-30} space={'$2'}>
              {/* Add game fields */}
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
              <YStack marginTop={'$4'}>
                <Text>Status</Text>
                <Controller
                  control={control}
                  rules={{
                    required: true
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <RadioGroup
                      onValueChange={onChange}
                      value={String(value)}
                      onBlur={onBlur}
                    >
                      <RadiogroupWithLabel
                        label={'Not Started'}
                        value={gameStatus.notStarted}
                      />
                      <RadiogroupWithLabel
                        label={'In Progress'}
                        value={gameStatus.inProgress}
                      />
                      <RadiogroupWithLabel
                        label={'Completed'}
                        value={gameStatus.completed}
                      />
                    </RadioGroup>
                  )}
                  name="status"
                />
              </YStack>
            </YStack>

            <YStack space={'$2'}>
              <Multiselect
                label={'Select your platforms'}
                options={platoformsOptions}
                onChange={(optionSelected: string[]) => {
                  setValue('platforms', optionSelected)
                }}
              />

              <Multiselect
                label={'Select game genres'}
                options={gameCategories}
                onChange={(optionSelected: string[]) => {
                  setValue('tags', optionSelected)
                }}
              />
            </YStack>

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
                <Text
                  disabled={isCreateLoading}
                  fontSize={'$6'}
                  fontWeight={'bold'}
                >
                  Cancel
                </Text>
              </Button>
              <Button
                disabled={isCreateLoading}
                onPressIn={handleSubmit(onSubmit)}
              >
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
