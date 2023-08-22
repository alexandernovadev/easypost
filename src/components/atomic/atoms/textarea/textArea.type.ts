export interface TextAreaProps {
  label: string
  type?: 'default' | 'password' | 'date'|'text'
  placeholder?: string
  variant?: 'default' | 'fill'
  error?: string
  props?: React.InputHTMLAttributes<HTMLTextAreaElement>
  colorLabel?: string
  limitText?: number
  actualLenght?: number
}

export type TextAreaPropsStyle = Pick<
TextAreaProps,
  'type' | 'error' | 'variant' | 'colorLabel'
>
