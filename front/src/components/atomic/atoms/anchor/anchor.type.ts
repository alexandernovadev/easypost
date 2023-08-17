export interface AnchorProps {
  variant:"default"
  text: string
  href: string
  type?:'BLANCK'
}

export type AnchorPropStyle = Pick<AnchorProps, "href"|"type"| "variant" >;