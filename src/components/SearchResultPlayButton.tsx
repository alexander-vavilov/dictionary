import { FC, useState } from 'react'
import { ISearchResult } from '../types'
import { BsFillPlayFill } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const SearchResultPlayButton: FC<{ result: ISearchResult }> = ({ result }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioSrc = result.phonetics.find((phonetic) => phonetic.audio)?.audio

  const Icon = isPlaying ? BiDotsHorizontalRounded : BsFillPlayFill

  const playPhoneticSound = () => {
    try {
      const audio = new Audio(audioSrc)
      audio.play()
      audio.addEventListener('ended', () => setIsPlaying(false))

      setIsPlaying(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    audioSrc && (
      <button
        onClick={playPhoneticSound}
        className={`${
          isPlaying ? 'animate-pulse' : ''
        } rounded-full bg-violet-200 p-2 text-violet-500 dark:bg-violet-600 dark:text-violet-200`}
        disabled={isPlaying}
      >
        <Icon size={32} />
      </button>
    )
  )
}

export default SearchResultPlayButton
