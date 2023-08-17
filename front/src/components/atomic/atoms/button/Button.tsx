import { ButtonStyle } from './button.style'
import { ButtonProps } from './button.type'

export const Button = ({ text='Mi button' }: ButtonProps) => {
  return <ButtonStyle>
    {text}
    </ButtonStyle>
}
