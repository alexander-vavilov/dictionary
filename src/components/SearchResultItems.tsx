import { FC } from 'react'
import { ISearchResult } from '../types'
import SearchResultItem from './SearchResultItem'

const SearchResultItems: FC<{ result: ISearchResult }> = ({ result }) => {
  return result?.meanings.map((meaning) => (
    <SearchResultItem key={meaning.partOfSpeech} meaning={meaning} />
  ))
}

export default SearchResultItems
