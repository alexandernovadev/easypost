export interface InputProps {
  label: string
  type?: 'default' | 'password'
  placeholder?:string ,
  error?: string
}


export type InputPropStyle = Pick<InputProps, "type"|"error" >;