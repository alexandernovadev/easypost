import { ButtonStyle } from './button.style'
import { ButtonProps } from './button.type'

export const Button = ({ text = 'Mi button', type }: ButtonProps) => {
  return <ButtonStyle type={type}>{text}</ButtonStyle>
}
