import { FC } from 'react'
import { meaningType } from '../types'
import SearchResultItemLabel from './SearchResultItemLabel'
import SearchResultDefinitions from './SearchResultDefinitions'
import SearchResultItemSynonyms from './SearchResultItemSynonyms'
import SearchResultItemAntonyms from './SearchResultItemAntonyms'
import Heading from './Heading'

interface ISearchResultItemProps {
  meaning: meaningType
  handleSearch: (query?: string) => void
}

const SearchResultItem: FC<ISearchResultItemProps> = ({
  meaning,
  handleSearch
}) => {
  const { synonyms, antonyms } = meaning

  return (
    <div>
      <SearchResultItemLabel content={meaning.partOfSpeech} />
      <Heading content='Meaning' />
      <SearchResultDefinitions items={meaning.definitions} />
      {synonyms.length > 0 && (
        <SearchResultItemSynonyms
          synonyms={synonyms}
          handleSearch={handleSearch}
        />
      )}
      {antonyms.length > 0 && (
        <SearchResultItemAntonyms
          antonyms={antonyms}
          handleSearch={handleSearch}
        />
      )}
    </div>
  )
}

export default SearchResultItem
