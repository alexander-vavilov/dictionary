import { Dispatch, FC, KeyboardEvent, SetStateAction } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'

interface ISearchProps {
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
  handleSearch: (query?: string) => void
}

const Search: FC<ISearchProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className='flex overflow-hidden rounded-md border border-gray-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800'>
      <input
        type='text'
        value={searchQuery}
        className='flex-auto bg-transparent p-2 outline-none'
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Search...'
      />
      {searchQuery && (
        <button onClick={() => setSearchQuery('')}>
          <MdClose />
        </button>
      )}
      <button onClick={() => handleSearch()} className='p-2'>
        <MdSearch size={24} />
      </button>
    </div>
  )
}

export default Search
