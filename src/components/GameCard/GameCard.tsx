import { Image, Text, View, XStack } from 'tamagui'
import React, { type ReactElement } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { Badge } from '../Badge'
import { LinearGradient } from '@tamagui/linear-gradient'
import { type GameResponseType } from '../../types/games'
import { StatusBadge } from '../StatusBadge/StatusBadge'
import { gameStatusColors, gameStatusNames } from '../../utils/constants'
import { GameMenu } from './GameMenu'

interface Props {
  game: GameResponseType
  onEditSuccess: () => void
}

export const GameCard = ({ game, onEditSuccess }: Props): ReactElement => {
  return (
    <LinearGradient
      padding={'$4'}
      borderRadius={'$4'}
      colors={['$blue6', '$blue2']}
      start={[0, 1]}
      end={[0, 0]}
      minHeight={340}
    >
      <XStack
        justifyContent={'space-between'}
        alignItems={'center'}
        zIndex={10}
      >
        {/* icons platform */}

        <XStack space={'$2'}>
          {game.Platforms.map((platform) => {
            return (
              <FontAwesome5
                key={platform.name}
                name={platform.iconName}
                size={24}
                color={'white'}
              />
            )
          })}
        </XStack>

        {/* edit button */}
        <View position={'relative'}>
          <GameMenu game={game} onSuccess={onEditSuccess} />
        </View>
      </XStack>
      <XStack marginTop={'$2'}>
        <XStack space={'$2'} marginTop={'$2'}>
          {game.Tags.map((tag) => {
            return <Badge key={tag.ID} text={tag.name} />
          })}
        </XStack>
      </XStack>
      <XStack paddingVertical={'$2'}>
        <Text flex={1} fontSize={'$8'} fontWeight={'bold'}>
          {game.name}
        </Text>
        <View width={80}>
          <StatusBadge
            colors={gameStatusColors.get(game.status)}
            text={gameStatusNames.get(game.status)}
          />
        </View>
      </XStack>
      <View marginTop={'auto'}>
        <Image
          borderRadius={'$2'}
          source={{
            width: '100%' as unknown as number,
            height: 200,
            uri: game.image
          }}
        />
      </View>
    </LinearGradient>
  )
}
