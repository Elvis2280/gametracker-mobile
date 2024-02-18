import { Input, Label, ScrollView, Text, View, XStack, YStack } from 'tamagui'
import React, { type ReactElement, useEffect, useState } from 'react'
import OutsidePressHandler from 'react-native-outside-press'
import { Ionicons } from '@expo/vector-icons'

interface OptionsType {
  label: string
  value: string
}

interface Props {
  label: string
  options: OptionsType[]
  onChange: (selectedOptions: string[]) => void
  initialValues?: string[]
}

export const Multiselect = ({
  label,
  options,
  onChange,
  initialValues = []
}: Props): ReactElement => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false)
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(initialValues)

  const handlerSelectOption = (option: string): void => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(
        selectedOptions.filter((selectedOption) => selectedOption !== option)
      )
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  const transformPlaceholder = (selectedOptions: string[]): string => {
    if (selectedOptions.length === 0) {
      return 'Select an option'
    }
    if (selectedOptions.length <= 4) {
      return selectedOptions.join(', ')
    }
    return selectedOptions.slice(0, 4).join(', ') + '...'
  }

  useEffect(() => {
    onChange(selectedOptions)
  }, [selectedOptions])

  return (
    <OutsidePressHandler
      onOutsidePress={() => {
        setIsOptionsVisible(false)
      }}
    >
      <View>
        <Label>{label}</Label>
        <View position={'relative'}>
          <Input
            onPress={() => {
              setIsOptionsVisible(!isOptionsVisible)
            }}
            placeholder={transformPlaceholder(selectedOptions)}
          />

          <YStack
            marginTop={'$1'}
            backgroundColor={'$blue4'}
            space={'$2'}
            padding={'$2'}
            borderRadius={'$2'}
            position={'absolute'}
            bottom={'100%'}
            width={'100%'}
            display={isOptionsVisible ? 'flex' : 'none'}
            maxHeight={150}
          >
            <ScrollView>
              {options.map((option) => {
                const isOptionSelected = selectedOptions.includes(option.value)
                return (
                  <XStack
                    marginVertical={'$1'}
                    space={'$1'}
                    padding={'$2'}
                    key={option.value}
                    backgroundColor={
                      isOptionSelected ? '$blue5' : 'transparent'
                    }
                    borderRadius={'$2'}
                  >
                    {isOptionSelected && (
                      <Ionicons
                        name="checkmark-sharp"
                        size={14}
                        color="white"
                      />
                    )}
                    <Text
                      flex={1}
                      onPress={() => {
                        handlerSelectOption(option.value)
                      }}
                    >
                      {option.label}
                    </Text>
                  </XStack>
                )
              })}
            </ScrollView>
          </YStack>
        </View>
      </View>
    </OutsidePressHandler>
  )
}
