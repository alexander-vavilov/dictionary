import { FC } from 'react'
import { meaningType } from '../types'
import SearchResultItemLabel from './SearchResultItemLabel'
import SearchResultDefinitions from './SearchResultDefinitions'
import SearchResultItemSynonyms from './SearchResultItemSynonyms'
import SearchResultItemAntonyms from './SearchResultItemAntonyms'

interface ISearchResultItemProps {
  meaning: meaningType
  handleSearch: (query?: string) => void
}

const SearchResultItem: FC<ISearchResultItemProps> = ({
  meaning,
  handleSearch
}) => {
  const { partOfSpeech, definitions, synonyms, antonyms } = meaning

  return (
    <div>
      <SearchResultItemLabel content={partOfSpeech} />
      <SearchResultDefinitions items={definitions} />
      {synonyms.length > 0 && (
        <SearchResultItemSynonyms
          items={synonyms}
          handleSearch={handleSearch}
        />
      )}
      {antonyms.length > 0 && (
        <SearchResultItemAntonyms
          items={antonyms}
          handleSearch={handleSearch}
        />
      )}
    </div>
  )
}

export default SearchResultItem
