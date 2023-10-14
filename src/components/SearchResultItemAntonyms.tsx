import { FC } from 'react'
import SearchResultItemGroup from './SearchResultItemGroup'

interface ISearchResultItemAntonyms {
  items: string[]
  handleSearch: (query?: string) => void
}

const SearchResultItemAntonyms: FC<ISearchResultItemAntonyms> = ({
  items,
  handleSearch
}) => {
  return (
    <SearchResultItemGroup name='Antonyms'>
      <ul className='flex flex-wrap gap-2'>
        {[...new Set(items)].map((item) => (
          <li
            key={item}
            onClick={() => handleSearch(item)}
            className='list-item'
          >
            {item}
          </li>
        ))}
      </ul>
    </SearchResultItemGroup>
  )
}

export default SearchResultItemAntonyms
