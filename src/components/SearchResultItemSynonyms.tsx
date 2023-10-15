import { FC } from 'react'
import SearchResultItemGroup from './SearchResultItemGroup'
import { Link } from 'react-router-dom'

const SearchResultItemSynonyms: FC<{ items: string[] }> = ({ items }) => {
  return (
    <SearchResultItemGroup name='Synonyms'>
      <ul className='flex flex-wrap gap-2'>
        {[...new Set(items)].map((item) => (
          <li key={item} className='list-item'>
            <Link to={`?query=${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </SearchResultItemGroup>
  )
}

export default SearchResultItemSynonyms
