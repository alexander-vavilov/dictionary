import { FC, useContext } from 'react'
import { BiBookAlt } from 'react-icons/bi'
import ToggleButton from './ToggleButton'
import { ThemeContext } from '../contexts/ThemeContext'
import { IThemeContext } from '../types'
import { MdOutlineDarkMode } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header: FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext) as IThemeContext

  return (
    <div className='flex items-center justify-between gap-4'>
      <Link to='/'>
        <BiBookAlt size={48} />
      </Link>
      <div className='flex items-center gap-2'>
        <ToggleButton
          onChange={() => changeTheme(theme === 'dark' ? 'light' : 'dark')}
          checked={theme === 'dark'}
          id='theme'
        />
        <MdOutlineDarkMode size={28} />
      </div>
    </div>
  )
}

export default Header
