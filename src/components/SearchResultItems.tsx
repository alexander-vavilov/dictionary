import { FC } from 'react'
import { ISearchResult } from '../types'
import SearchResultItem from './SearchResultItem'

interface ISearchResultItemsProps {
  result: ISearchResult
  handleSearch: (query?: string) => void
}

const SearchResultItems: FC<ISearchResultItemsProps> = ({
  result,
  handleSearch
}) => {
  return result?.meanings.map((meaning) => (
    <SearchResultItem
      key={meaning.partOfSpeech}
      meaning={meaning}
      handleSearch={handleSearch}
    />
  ))
}

export default SearchResultItems
