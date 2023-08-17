import { TypographyStyle } from "./typography.style"
import { TypographyProps } from "./typography.type"

export const Typography = ({variant, text}: TypographyProps) => {
  return (
    <TypographyStyle variant={variant}>{text}</TypographyStyle>
  )
}
