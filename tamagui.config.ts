import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v2-native'

const tamaguiConfig = createTamagui({
  ...config,
  themes,
  tokens,
  shorthands
})

// this makes typescript properly type everything based on the config
type Conf = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig
