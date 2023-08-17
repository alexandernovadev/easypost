export interface InputProps {
  label: string
  type?: 'default' | 'password'
  placeholder?:string ,
  error?: string
  props?: React.InputHTMLAttributes<HTMLInputElement>
}


export type InputPropStyle = Pick<InputProps, "type"|"error" >;