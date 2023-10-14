import { FC } from 'react'

const Heading: FC<{ content: string }> = ({ content }) => {
  return <h3 className='text-xl text-black/50 dark:text-white/70'>{content}</h3>
}

export default Heading
