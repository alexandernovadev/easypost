import styled, { css } from 'styled-components'
import { TypographyPropStyle } from './typography.type'

export const TypographyStyle = styled.div<TypographyPropStyle>`
  display: contents;

  ${({ variant, color, theme }) =>
    variant == 'title' &&
    css`
      color: ${color ? color : theme.colors.white};
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    `}

  ${({ variant, color, theme }) =>
    variant == 'subtitle' &&
    css`
      color: ${color ? color : theme.colors.primaryColor};

      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `}

  ${({ variant, color, theme }) =>
    variant == 'titleForm' &&
    css`
      color: ${color ? color : theme.colors.white};

      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `}  
    
  ${({ variant, color, theme }) =>
    variant == 'capion' &&
    css`
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      color: ${color ? color : theme.colors.textGray};

      line-height: normal;
    `}
`
