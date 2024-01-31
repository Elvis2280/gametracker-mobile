import { Checkbox, type CheckboxProps, Text, XStack } from 'tamagui'
import React, { type ReactElement } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'

interface Props {
  label: string
}

export const CheckboxWithLabel = ({
  label,
  ...checkboxProps
}: CheckboxProps & Props): ReactElement => {
  return (
    <XStack>
      <Checkbox {...checkboxProps}>
        <Checkbox.Indicator>
          <FontAwesome5 name={'check'} />
        </Checkbox.Indicator>
      </Checkbox>
      <Text>{label}</Text>
    </XStack>
  )
}
