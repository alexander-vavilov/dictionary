import { FC } from 'react'
import { ISearchResult } from '../types'
import SearchResultMain from './SearchResultMain'
import SearchResultItems from './SearchResultItems'

const SearchResult: FC<{ result: ISearchResult }> = ({ result }) => {
  return (
    <div className='flex-auto'>
      <SearchResultMain result={result} />
      <div>
        <SearchResultItems result={result} />
      </div>
    </div>
  )
}

export default SearchResult
