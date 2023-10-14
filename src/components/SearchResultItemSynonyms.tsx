import { FC } from 'react'
import SearchResultItemGroup from './SearchResultItemGroup'

interface ISearchResultItemSynonymsProps {
  items: string[]
  handleSearch: (query?: string) => void
}

const SearchResultItemSynonyms: FC<ISearchResultItemSynonymsProps> = ({
  items,
  handleSearch
}) => {
  return (
    <SearchResultItemGroup name='Synonyms'>
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

export default SearchResultItemSynonyms
