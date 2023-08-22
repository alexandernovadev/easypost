import React from 'react'
import { AnchorProps } from './anchor.type'
import { AnchorStyle } from './anchor.style'
import { Link } from 'react-router-dom'

export const Anchor = ({
  variant,
  text = 'go to',
  href = '#',
  type = 'BLANCK',
}: AnchorProps) => {
  return (
    <AnchorStyle href={href} variant={variant} type={type}>
      <Link to={href}> {text}</Link>
    </AnchorStyle>
  )
}
