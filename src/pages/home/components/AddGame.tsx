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
import React, { type ReactElement } from 'react'
import { Ionicons } from '@expo/vector-icons'
import SearchBar from '../../../components/SearchBar/SearchBar'

export const AddGame = (): ReactElement => {
  const [open, setOpen] = React.useState(false)
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
            <View marginTop={'$4'}>
              <SearchBar placeholder={'Search game'} handleSearch={() => {}} />
            </View>
            <Form marginTop={'$6'} onSubmit={() => {}}>
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
                  onPress={() => {
                    setOpen(false)
                  }}
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
              <Button
                variant={'outlined'}
                onPress={() => {
                  setOpen(false)
                }}
              >
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
