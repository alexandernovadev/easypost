export interface TypographyProps {
  // This should be h1 h2 h3 and so on buuuutt, it is so
  variant: 'title' | 'subtitle' | 'titleForm'|'capion',
  text: string
  color?: string
}


export type TypographyPropStyle = Pick<TypographyProps, "variant" >;