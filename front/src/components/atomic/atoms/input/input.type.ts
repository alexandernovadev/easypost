export interface InputProps {
  label: string
  type?: 'default' | 'password'
}


export type InputPropStyle = Pick<InputProps, "type" >;