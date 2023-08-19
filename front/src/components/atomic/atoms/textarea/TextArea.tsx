import { forwardRef } from 'react'
import { TextAreaStyle } from './TextArea.style'
import { TextAreaProps } from './textArea.type'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      type = 'text',
      placeholder = 'text',
      error = '',
      variant = 'default',
      limitText,
      actualLenght,
      ...props
    },
    ref
  ) => {
    return (
      <TextAreaStyle type={type} error={error} variant={variant}>
        <label>{label}</label>

        <textarea
          ref={ref}
          {...props}
          placeholder={placeholder}
          cols={30}
          rows={10}
        ></textarea>

        {error.length > 0 && <span>{error}</span>}

        <div className="limitChars">
          {actualLenght}/{limitText}
        </div>
      </TextAreaStyle>
    )
  }
)
