import React, { type ReactElement } from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import tamaguiConfig from '../../tamagui.config'

interface Props {
  children: ReactElement
}

export default function TamaguiConfigWrapper({
  children
}: Props): ReactElement {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name={'blue_alt1'}>{children}</Theme>
    </TamaguiProvider>
  )
}
