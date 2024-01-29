import { Input, View } from 'tamagui'
import React, { type ReactElement } from 'react'

interface Props {
  placeholder?: string
  handleSearch: (searchText: string) => void
}

const SearchBar = ({ placeholder, handleSearch }: Props): ReactElement => {
  return (
    <View>
      <Input
        onChangeText={handleSearch}
        placeholder={placeholder}
        width={'100%'}
      />
    </View>
  )
}

export default SearchBar
