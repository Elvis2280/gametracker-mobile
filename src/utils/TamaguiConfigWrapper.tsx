import React, { type ReactElement } from 'react'
import { TamaguiProvider, Theme } from 'tamagui'
import tamaguiConfig from '../../tamagui.config'
import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
  children: ReactElement
}

export default function TamaguiConfigWrapper({
  children
}: Props): ReactElement {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <TamaguiProvider config={tamaguiConfig}>
        <Theme name={'blue_alt1'}>{children}</Theme>
      </TamaguiProvider>
    </QueryClientProvider>
  )
}
