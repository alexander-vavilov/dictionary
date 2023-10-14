import { FC } from 'react'
import Heading from './Heading'

interface ISearchResultItemAntonyms {
  antonyms: string[]
  handleSearch: (query?: string) => void
}

const SearchResultItemAntonyms: FC<ISearchResultItemAntonyms> = ({
  antonyms,
  handleSearch
}) => {
  return (
    <div className='flex items-center gap-4 py-2'>
      <Heading content='Antonyms' />
      <ul className='flex gap-2'>
        {[...new Set(antonyms)].map((antonym) => (
          <li
            key={antonym}
            onClick={() => handleSearch(antonym)}
            className='cursor-pointer text-violet-500 hover:underline dark:text-violet-400'
          >
            {antonym}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResultItemAntonyms
