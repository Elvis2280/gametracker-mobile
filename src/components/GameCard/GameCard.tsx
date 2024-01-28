import { Button, Image, View, XStack } from 'tamagui'
import React, { type ReactElement } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { platoformsIcons } from '../../utils/constants'
import { Badge } from '../Badge'
import { LinearGradient } from '@tamagui/linear-gradient'

export const GameCard = (): ReactElement => {
  return (
    <LinearGradient
      padding={'$4'}
      borderRadius={'$4'}
      colors={['$blue6', '$blue2']}
      start={[0, 1]}
      end={[0, 0]}
      height={340}
    >
      <XStack justifyContent={'space-between'} alignItems={'center'}>
        {/* icons platform */}
        <XStack space={'$2'}>
          <FontAwesome5
            name={platoformsIcons.steamdeck}
            size={24}
            color={'white'}
          />
          <FontAwesome5 name={platoformsIcons.xbox} size={24} color={'white'} />
          <FontAwesome5
            name={platoformsIcons.playstation}
            size={24}
            color={'white'}
          />
        </XStack>
        {/* edit button */}
        <Button variant={'outlined'} size={'$2'}>
          <FontAwesome5 name={'edit'} size={24} color={'white'} />
        </Button>
      </XStack>
      <XStack marginTop={'$2'}>
        <XStack space={'$2'} marginTop={'$2'}>
          <Badge text={'Adventure'} />
          <Badge text={'Action'} />
          <Badge text={'RPG'} />
          <Badge text={'Strategic'} />
        </XStack>
        {/* TODO: Add status game badge */}
      </XStack>
      <View marginTop={'auto'}>
        <Image
          borderRadius={'$2'}
          source={{
            width: '100%' as unknown as number,
            height: 220,
            uri: 'https://www.dualshockers.com/wp-content/uploads/2017/01/the_elder_scrolls_v_skyrim.jpg'
          }}
        />
      </View>
    </LinearGradient>
  )
}
