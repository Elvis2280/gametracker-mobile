import {
  Button,
  Dialog,
  Form,
  Input,
  ScrollView,
  Separator,
  Spinner,
  Text,
  TextArea,
  Unspaced,
  View,
  XStack,
  YGroup,
  YStack
} from 'tamagui'
import React, { type ReactElement } from 'react'
import { Ionicons } from '@expo/vector-icons'
import SearchBar from '../../../components/SearchBar/SearchBar'
import useGameAPi from '../../../hooks/useGameAPi'

export const AddGame = (): ReactElement => {
  const [open, setOpen] = React.useState(false)
  const {
    handleSearchGameByName,
    games,
    isLoading,
    isReadyToRender,
    resetGamesData
  } = useGameAPi()

  const handleClose = (): void => {
    setOpen(false)
    if (resetGamesData) {
      resetGamesData()
    }
  }
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
              <SearchBar
                placeholder={'Search game'}
                handleSearch={handleSearchGameByName}
              />
              <View
                display={isReadyToRender ? 'flex' : 'none'}
                top={'100%'}
                maxHeight={200}
                backgroundColor={'$blue4'}
                width={'100%'}
                position={'absolute'}
                marginTop={'$2'}
                borderRadius={'$2'}
                justifyContent={'center'}
                alignItems={'center'}
                padding={'$4'}
              >
                {isLoading
                  ? (
                  <Spinner color={'$blue12'} />
                    )
                  : (
                  <ScrollView width={'100%'}>
                    <YGroup separator={<Separator borderColor={'$blue6'} />}>
                      {games.map((game, index) => {
                        return (
                          <YGroup.Item key={index}>
                            <Text fontSize={'$5'} paddingVertical={'$2'}>
                              {game.name}
                            </Text>
                          </YGroup.Item>
                        )
                      })}
                    </YGroup>
                  </ScrollView>
                    )}
              </View>
            </View>
            <Form
              marginTop={'$6'}
              onSubmit={() => {}}
              position={'relative'}
              zIndex={-20}
            >
              <YStack space={'$2'}>
                <Text>Name</Text>
                <Input />
                <Input display={'none'} />
                <Text>Description</Text>
                <TextArea size={'$4'} />
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
