import { FC } from 'react'
import { definitionType } from '../types'
import SearchResultItemGroup from './SearchResultItemGroup'

const SearchResultDefinitions: FC<{ items: definitionType[] }> = ({
  items
}) => {
  return (
    <SearchResultItemGroup name='Meaning'>
      <ul className='flex list-disc flex-col gap-2 py-3 pl-5 marker:text-violet-500 dark:marker:text-violet-400 md:pl-10'>
        {items.map(({ definition }) => (
          <li key={definition}>{definition}</li>
        ))}
      </ul>
    </SearchResultItemGroup>
  )
}

export default SearchResultDefinitions
