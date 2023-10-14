import { ChangeEvent, FC, InputHTMLAttributes } from 'react'

interface IToggleButton extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  id: string
  checked: boolean
}

const ToggleButton: FC<IToggleButton> = ({
  onChange,
  id,
  checked,
  ...props
}) => {
  return (
    <div>
      <input
        type='checkbox'
        id={id}
        onChange={onChange}
        className='peer hidden'
        checked={checked}
        {...props}
      />
      <label
        htmlFor={id}
        className='relative block h-6 w-10 cursor-pointer rounded-full bg-neutral-600 transition-all after:absolute after:left-0.5 after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:rounded-full after:bg-white after:shadow-sm after:transition-all peer-checked:bg-violet-500 peer-checked:after:left-[calc(100%_-_22px)]'
      />
    </div>
  )
}

export default ToggleButton
