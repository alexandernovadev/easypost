import styled from 'styled-components'
import { AnchorPropStyle } from './anchor.type'

export const AnchorStyle = styled.span<AnchorPropStyle>`
  a {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration-line: underline;
  }
`
