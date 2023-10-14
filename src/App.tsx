import { FC, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import { ISearchResult } from './types'
import Search from './components/Search'
import SearchResult from './components/SearchResult'

const App: FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState<ISearchResult | null>(null)
  const [isError, setIsError] = useState(false)

  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en'

  const handleSearch = async (query: string = searchQuery) => {
    try {
      setIsError(false)

      const { data } = await axios.get(`${url}/${query}`)
      setSearchResult(data[0])
    } catch (error) {
      setIsError(true)
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='w-full max-w-4xl px-4 py-6'>
        <Header />
        <div className='py-10'>
          <Search
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          {isError && (
            <span className='text-red-500'>No results for you query</span>
          )}
        </div>
        {searchResult && (
          <SearchResult result={searchResult} handleSearch={handleSearch} />
        )}
      </div>
    </div>
  )
}

export default App
