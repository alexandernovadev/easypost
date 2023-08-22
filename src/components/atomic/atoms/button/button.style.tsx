import styled from 'styled-components'
import { ButtonProps } from './button.type'

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 30px;
  text-align: center;
  padding: 0;
  outline: none;
  border: none;

  font-size: 20px;
  font-weight: 400;
  flex-shrink: 0;
  line-height: normal;

  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};

  background: linear-gradient(
    270deg,
    ${({ theme }) => theme.colors.tercaryColor} 0%,
    ${({ theme }) => theme.colors.secondaryColor} 100%
  );
  cursor: pointer;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.008);
  }
`
