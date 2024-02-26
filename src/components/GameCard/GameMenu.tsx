import { Button, Text, View, XStack, YStack } from 'tamagui'
import React, { type ReactElement, useState } from 'react'
import { Entypo, Feather } from '@expo/vector-icons'
import { EditGame } from './EditGame'
import { type GameResponseType } from '../../types/games'
import OutsidePressHandler from 'react-native-outside-press'
import { useCreateGame } from '../../pages/home/hooks/useCreateGame'

interface Props {
  game: GameResponseType
  onSuccess: () => void
}

export const GameMenu = ({ game, onSuccess }: Props): ReactElement => {
  const [open, setOpen] = useState(false)
  const { handleDeleteGame } = useCreateGame({
    onSuccessCallback: onSuccess
  })

  const handleOpen = (): void => {
    setOpen(() => !open)
  }

  const deleteGame = (): void => {
    handleDeleteGame && handleDeleteGame(game.ID.toString())
  }

  return (
    <OutsidePressHandler
      onOutsidePress={() => {
        setOpen(false)
      }}
    >
      <View position={'relative'}>
        <Button
          onPress={handleOpen}
          paddingHorizontal={'$1'}
          variant={'outlined'}
        >
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </Button>
        <View
          display={open ? 'flex' : 'none'}
          position={'absolute'}
          top={'100%'}
          right={'50%'}
          backgroundColor={'$blue4'}
          width={100}
          padding={'$2'}
          borderRadius={'$2'}
          zIndex={12}
        >
          <YStack gap={'$3'}>
            <EditGame game={game} handleOnSuccess={onSuccess} />

            <Button
              onPress={deleteGame}
              size={'$2'}
              paddingHorizontal={'$1'}
              variant={'outlined'}
            >
              <XStack
                justifyContent={'space-between'}
                alignItems={'center'}
                columnGap={'$2'}
              >
                <Feather name="trash-2" size={24} color="red" />
                <Text>Delete</Text>
              </XStack>
            </Button>
          </YStack>
        </View>
      </View>
    </OutsidePressHandler>
  )
}
