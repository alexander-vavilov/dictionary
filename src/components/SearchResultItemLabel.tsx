import { FC } from 'react'

const SearchResultItemLabel: FC<{ content: string }> = ({ content }) => {
  return (
    <h2 className='flex items-center py-8 text-xl font-medium leading-none after:mx-4 after:block after:h-px after:w-full after:bg-black/20 after:dark:bg-white/40'>
      {content}
    </h2>
  )
}

export default SearchResultItemLabel
