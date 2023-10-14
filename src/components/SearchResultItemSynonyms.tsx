import { FC } from 'react'
import Heading from './Heading'

interface ISearchResultItemSynonymsProps {
  synonyms: string[]
  handleSearch: (query?: string) => void
}

const SearchResultItemSynonyms: FC<ISearchResultItemSynonymsProps> = ({
  synonyms,
  handleSearch
}) => {
  return (
    <div className='flex items-center gap-4 py-2'>
      <Heading content='Synonyms' />
      <ul className='flex gap-2'>
        {[...new Set(synonyms)].map((synonym) => (
          <li
            key={synonym}
            onClick={() => handleSearch(synonym)}
            className='cursor-pointer text-violet-500 hover:underline dark:text-violet-400'
          >
            {synonym}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResultItemSynonyms
