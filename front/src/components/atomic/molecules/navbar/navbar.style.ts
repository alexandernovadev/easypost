import styled from 'styled-components'

export const NavbarStyle = styled.nav`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: space-around;
  align-items: center;
`
