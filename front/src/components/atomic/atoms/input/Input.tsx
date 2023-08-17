import { InputStyle } from './input.style'
import { InputProps } from './input.type'
import eyeIcon from '../../../../assets/icons/eye.png'
import { useState } from 'react'

export const Input = ({
  label,
  type,
  placeholder = 'text',
  error = '',
}: InputProps) => {
  const [typeState, setTypeState] = useState('text')

  const handleTypeInput = () => {
    setTypeState((textValueType) =>
      textValueType == 'text' ? 'password' : 'text'
    )
  }

  return (
    <InputStyle type={type} error={error}>
      <label>{label}</label>

      <input type={typeState} placeholder={placeholder} />
      {type == 'password' && (
        <>
          <img
            onClick={handleTypeInput}
            src={eyeIcon}
            alt="eyeicon"
            width={17}
            height={15}
          />
        </>
      )}
      {error.length > 0 && <span>{error}</span>}
    </InputStyle>
  )
}
