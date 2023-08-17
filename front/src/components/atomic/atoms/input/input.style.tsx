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

    ${({ type }) => type == 'password' && css`
    
      padding-right: 20px;
    `}
  }
  img {
    position: absolute;
    right: 2px;
    bottom: 8px;
    object-fit: cover;
    cursor: pointer;
  }
`
