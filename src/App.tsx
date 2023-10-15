import { FC, useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import Header from './components/Header'
import { ISearchResult } from './types'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import Avatar from './assets/Avatar.svg'
import { useSearchParams } from 'react-router-dom'

const App: FC = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult | null>(null)
  const [isError, setIsError] = useState(false)

  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'

  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''

  const handleSearch = useCallback(async () => {
    if (!query) return setSearchResult(null)

    try {
      setIsError(false)

      const { data } = await axios.get(`${url}/${query}`)
      setSearchResult(data[0])
    } catch (error) {
      setIsError(true)
    }
  }, [query])

  useEffect(() => {
    handleSearch()
  }, [handleSearch])

  return (
    <div className='flex h-full justify-center'>
      <div className='flex w-full max-w-4xl flex-col px-4 py-6'>
        <div>
          <Header />
          <div className='py-10'>
            <Search />
            {isError && (
              <span className='text-red-500'>No results for your query</span>
            )}
          </div>
        </div>
        {searchResult ? (
          <SearchResult result={searchResult} />
        ) : (
          <div className='flex flex-auto flex-col items-center justify-center'>
            <img src={Avatar} alt='avatar' width={300} />
            <span className='text-xl font-medium'>Dictionary</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
