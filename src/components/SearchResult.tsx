import { FC } from 'react'
import { ISearchResult } from '../types'
import SearchResultMain from './SearchResultMain'
import SearchResultItems from './SearchResultItems'

interface ISearchResultProps {
  result: ISearchResult
  handleSearch: (query?: string) => void
}

const SearchResult: FC<ISearchResultProps> = ({ result, handleSearch }) => {
  return (
    <div className='flex-auto'>
      <SearchResultMain result={result} />
      <div>
        <SearchResultItems result={result} handleSearch={handleSearch} />
      </div>
    </div>
  )
}

export default SearchResult
