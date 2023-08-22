import { TypographyStyle } from "./typography.style"
import { TypographyProps } from "./typography.type"

export const Typography = ({variant, text,color}: TypographyProps) => {
  return (
    <TypographyStyle variant={variant} color={color}>{text}</TypographyStyle>
  )
}
