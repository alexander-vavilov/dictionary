import { FC } from 'react'
import { meaningType } from '../types'
import SearchResultItemLabel from './SearchResultItemLabel'
import SearchResultDefinitions from './SearchResultDefinitions'
import SearchResultItemSynonyms from './SearchResultItemSynonyms'
import SearchResultItemAntonyms from './SearchResultItemAntonyms'

const SearchResultItem: FC<{ meaning: meaningType }> = ({ meaning }) => {
  const { partOfSpeech, definitions, synonyms, antonyms } = meaning

  return (
    <div>
      <SearchResultItemLabel content={partOfSpeech} />
      <SearchResultDefinitions items={definitions} />
      {synonyms.length > 0 && <SearchResultItemSynonyms items={synonyms} />}
      {antonyms.length > 0 && <SearchResultItemAntonyms items={antonyms} />}
    </div>
  )
}

export default SearchResultItem
