import { FC } from 'react'

const Heading: FC<{ content: string }> = ({ content }) => {
  return (
    <h3 className='text-lg leading-none text-black/50 dark:text-white/70 md:text-xl'>
      {content}
    </h3>
  )
}

export default Heading
