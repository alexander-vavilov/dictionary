import { FC, KeyboardEvent, useState } from 'react'
import { MdClose, MdSearch } from 'react-icons/md'
import { Link, useSearchParams } from 'react-router-dom'

const Search: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const setSearchParams = useSearchParams()[1]

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') setSearchParams(`query=${searchQuery}`)
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
      <Link to={`?query=${searchQuery}`} className='p-2'>
        <MdSearch size={24} />
      </Link>
    </div>
  )
}

export default Search
