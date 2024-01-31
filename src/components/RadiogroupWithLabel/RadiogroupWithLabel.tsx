import React, { type ReactElement } from 'react'
import { Label, RadioGroup, type RadioGroupProps, XStack } from 'tamagui'

interface Props {
  label: string
  value: string
}

export const RadiogroupWithLabel = ({
  label,
  value,
  ...props
}: RadioGroupProps & Props): ReactElement => {
  const id = `${label}-${value}`
  return (
    <XStack height={40} alignItems="center" space="$2">
      <RadioGroup.Item value={value} id={id}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label htmlFor={id}>{label}</Label>
    </XStack>
  )
}
