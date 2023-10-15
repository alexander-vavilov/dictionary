import { FC } from 'react'
import SearchResultPlayButton from './SearchResultPlayButton'
import { ISearchResult } from '../types'

const SearchResultMain: FC<{ result: ISearchResult }> = ({ result }) => {
  return (
    <div className='sticky top-0 -mx-4 flex items-center justify-between px-4 py-2 backdrop-blur-md dark:bg-neutral-900/70 md:py-4'>
      <div className='flex flex-col md:gap-4'>
        <h1 className='text-4xl font-medium md:text-5xl'>{result.word}</h1>
        <span className='text-lg text-violet-500 dark:text-violet-400'>
          {result.phonetic}
        </span>
      </div>
      <SearchResultPlayButton result={result} />
    </div>
  )
}

export default SearchResultMain
