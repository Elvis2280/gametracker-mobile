import {
  Button,
  Dialog,
  Form,
  Input,
  Text,
  TextArea,
  Unspaced,
  View,
  YStack
} from 'tamagui'
import React, { type ReactElement } from 'react'
import { Ionicons } from '@expo/vector-icons'
import SearchBar from '../../../components/SearchBar/SearchBar'

export const AddGame = (): ReactElement => {
  return (
    <View>
      <Dialog modal>
        <Dialog.Trigger asChild>
          <Button>
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
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    </View>
  )
}

export default AddGame
