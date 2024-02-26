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
import { Controller, useForm } from 'react-hook-form'
import { RadiogroupWithLabel } from '../RadiogroupWithLabel/RadiogroupWithLabel'
import {
  gameCategories,
  gameStatus,
  platoformsOptions
} from '../../utils/constants'
import { Multiselect } from '../Multiselect/Multiselect'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import React, { type ReactElement, useState } from 'react'
import type { CreateGameType, GameResponseType } from '../../types/games'
import { useCreateGame } from '../../pages/home/hooks/useCreateGame'

interface Props {
  game: GameResponseType
  handleOnSuccess: () => void
}

export const EditGame = ({ game, handleOnSuccess }: Props): ReactElement => {
  const [open, setOpen] = useState(false)
  const platformsList = game.Platforms.map((platform) => platform.name)
  const { handleCreateGame: handleUpdateGame, isLoading } = useCreateGame({
    onSuccessCallback: () => {
      setOpen(false)
      handleOnSuccess()
    },
    isUpdate: true
  })
  const tagsList = game.Tags.map((tag) => tag.name)
  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      name: game.name,
      description: game.description,
      image: game.image,
      status: game.status,
      platforms: platformsList,
      tags: tagsList,
      score: game.score || 0
    }
  }) // TODO: handle errors and validations

  const handleClose = (): void => {
    setOpen(false)
  }

  const onSubmit = (data: CreateGameType): void => {
    handleUpdateGame({
      ...data,
      id: game.ID
    })
  }

  return (
    <View>
      <Dialog modal open={open}>
        <Dialog.Trigger asChild>
          <Button
            onPress={() => {
              setOpen(true)
            }}
            variant={'outlined'}
            size={'$2'}
          >
            <XStack
              justifyContent={'space-between'}
              alignItems={'center'}
              columnGap={'$2'}
            >
              <FontAwesome5 name={'edit'} size={22} color={'white'} />
              <Text>Edit</Text>
            </XStack>
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay key="overlay" animation="quick" opacity={0.5} />

          <Dialog.Content width={'100%'} bordered elevate key={'content'}>
            <Dialog.Title>
              <Text fontSize={'$6'} fontWeight={'bold'}>
                Edit {game.name}
              </Text>
            </Dialog.Title>
            <Dialog.Description>
              <Text fontSize={'$5'}>
                You can edit the game information and save it.
              </Text>
            </Dialog.Description>

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
                  maxLength: 100
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
                initialValues={platformsList}
              />

              <Multiselect
                label={'Select game genres'}
                options={gameCategories}
                onChange={(optionSelected: string[]) => {
                  setValue('tags', optionSelected)
                }}
                initialValues={tagsList}
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
                <Text disabled={isLoading} fontSize={'$6'} fontWeight={'bold'}>
                  Cancel
                </Text>
              </Button>
              <Button disabled={isLoading} onPressIn={handleSubmit(onSubmit)}>
                <Text fontSize={'$6'} fontWeight={'bold'}>
                  Save Edit
                </Text>
              </Button>
            </XStack>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  )
}
