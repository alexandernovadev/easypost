import { ButtonStyle } from './button.style'
import { ButtonProps } from './button.type'

export const Button = ({ text = 'Mi button', type, onClick }: ButtonProps) => {
  return <ButtonStyle type={type} onClick={onClick}>{text}</ButtonStyle>
}
