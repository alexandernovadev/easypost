import { forwardRef, useState } from 'react'
import { InputStyle } from './input.style'
import { InputProps } from './input.type'
import eyeIcon from '../../../../assets/icons/eye.png'
import { CloseCircle } from '../../../../assets/Components/CloseCircle'
import { DATEDEFAULT } from '../../../../utils/dateDefault'
// import { ArrowDown } from '../../../../assets/Components/ArrowDown'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = 'text',
      placeholder = 'text',
      error = '',
      variant = 'default',
      resetDateValue,
      actualValue,
      ...props
    },
    ref
  ) => {
    console.log('actualValue', actualValue && String(actualValue))

    const [typeState, setTypeState] = useState(type)

    const handleTypeInput = () => {
      setTypeState((textValueType) =>
        textValueType === 'text' ? 'password' : 'text'
      )
    }
    return (
      <InputStyle type={type} error={error} variant={variant}>
        <label>{label}</label>
        <input
          ref={ref}
          {...props}
          type={typeState}
          placeholder={placeholder}
        />

        {actualValue && actualValue.toString() !== DATEDEFAULT.dateString && (
          <span className="colsesvg" onClick={resetDateValue}>
            <CloseCircle />
          </span>
        )}
        {/*  
        <span className='arrowsbg'>

        <ArrowDown />
        </span>
     */}

        {type === 'password' && (
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
)
