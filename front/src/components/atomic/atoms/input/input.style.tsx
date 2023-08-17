import styled, { css } from 'styled-components'
import { InputPropStyle } from './input.type'

export const InputStyle = styled.div<InputPropStyle>`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;

  label {
    font-size: 15px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textContrast};
    text-transform: capitalize;
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white300};
    outline: none;
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 4px;
    padding-top: 4px;

    ${({ type }) =>
      type == 'password' &&
      css`
        padding-right: 20px;
      `}

    &::placeholder {
      color: ${({ theme }) => theme.colors.textGray};
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

  
  }
  img {
    position: absolute;
    right: 2px;
    bottom: 8px;
    object-fit: cover;
    cursor: pointer;

    ${({ error }) =>
      error &&
      error?.length > 0 &&
      css`
        bottom: 22px;
      `}
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors.errorColor};
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
