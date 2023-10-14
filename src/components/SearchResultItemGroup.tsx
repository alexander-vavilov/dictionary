import { FC, ReactNode } from 'react'
import Heading from './Heading'

interface ISearchResultItemGroup {
  name: string
  children: ReactNode
}

const SearchResultItemGroup: FC<ISearchResultItemGroup> = ({
  name,
  children
}) => {
  return (
    <div className='flex flex-col gap-4 md:py-2'>
      <Heading content={name} />
      {children}
    </div>
  )
}

export default SearchResultItemGroup
