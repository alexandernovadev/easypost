import React from 'react'
import { AnchorProps } from './anchor.type'
import { AnchorStyle } from './anchor.style'

export const Anchor = ({
  variant,
  text = 'go to',
  href = '#',
  type = 'BLANCK',
}: AnchorProps) => {
  return (
    <AnchorStyle href={href} variant={variant} type={type}>
      {text}
    </AnchorStyle>
  )
}
