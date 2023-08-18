export interface InputProps {
  label: string
  type?: 'default' | 'password' | 'date'|'text'
  placeholder?: string
  variant?: 'default' | 'fill'
  error?: string
  props?: React.InputHTMLAttributes<HTMLInputElement>
  colorLabel?: string
}

export type InputPropStyle = Pick<
  InputProps,
  'type' | 'error' | 'variant' | 'colorLabel'
>
