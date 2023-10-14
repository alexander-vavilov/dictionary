import { FC } from 'react'
import SearchResultPlayButton from './SearchResultPlayButton'
import { ISearchResult } from '../types'

const SearchResultMain: FC<{ result: ISearchResult }> = ({ result }) => {
  return (
    <div className='sticky top-0 flex items-center justify-between py-4 backdrop-blur-md dark:bg-neutral-900/70'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-5xl font-medium'>{result.word}</h1>
        <span className='text-lg text-violet-500 dark:text-violet-400'>
          {result.phonetic}
        </span>
      </div>
      <SearchResultPlayButton result={result} />
    </div>
  )
}

export default SearchResultMain
