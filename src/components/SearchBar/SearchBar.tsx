import { Input, View } from 'tamagui'
import React, { type ReactElement } from 'react'

interface Props {
  placeholder?: string
  handleSearch: (searchText: string) => void
}

const SearchBar = ({ placeholder }: Props): ReactElement => {
  return (
    <View>
      <Input placeholder={placeholder} width={'100%'} />
    </View>
  )
}

export default SearchBar
