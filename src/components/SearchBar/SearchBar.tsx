import { Input, View } from 'tamagui'
import React, { type ReactElement, useEffect, useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'

interface Props {
  placeholder?: string
  handleSearch: (searchText: string) => void
  callBackWhenSearch?: () => void
}

const SearchBar = ({
  placeholder,
  handleSearch,
  callBackWhenSearch
}: Props): ReactElement => {
  const [searchText, setSearchText] = useState('')
  const { debounceValue } = useDebounce(searchText, 500)

  useEffect(() => {
    if (debounceValue) {
      handleSearch(debounceValue)
      if (callBackWhenSearch) {
        callBackWhenSearch()
      }
    }
  }, [debounceValue])
  return (
    <View>
      <Input
        value={searchText}
        onChangeText={setSearchText}
        placeholder={placeholder}
        width={'100%'}
      />
    </View>
  )
}

export default SearchBar
