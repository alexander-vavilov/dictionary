import { FC } from 'react'
import { definitionType } from '../types'

const SearchResultDefinitions: FC<{ items: definitionType[] }> = ({
  items
}) => {
  return (
    <ul className='flex list-inside list-disc flex-col gap-2 py-3 pl-4 marker:text-violet-500 dark:marker:text-violet-400'>
      {items.map(({ definition }) => (
        <li key={definition}>{definition}</li>
      ))}
    </ul>
  )
}

export default SearchResultDefinitions
