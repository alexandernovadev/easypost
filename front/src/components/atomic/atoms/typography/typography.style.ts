import styled, { css } from 'styled-components'
import { TypographyPropStyle } from './typography.type'

export const TypographyStyle = styled.div<TypographyPropStyle>`
  display: contents;

  ${({ variant }) =>
    variant == 'title' &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    `}

  ${({ variant }) =>
    variant == 'subtitle' &&
    css`
      color: ${({ theme }) => theme.colors.primaryColor};
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `}

  ${({ variant }) =>
    variant == 'titleForm' &&
    css`
      color: ${({ theme }) => theme.colors.white};
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `}  
    
    ${({ variant }) =>
    variant == 'capion' &&
    css`
      color: ${({ theme }) => theme.colors.textGray};
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    `}
`
