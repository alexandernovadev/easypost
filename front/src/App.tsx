import styled from 'styled-components'
import Routes from './router'

export const StyledApp = styled.div`
  /* background-color: ${({ theme }) => theme.colors.background}; */
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <StyledApp>
      <Routes />
    </StyledApp>
  )
}

export default App
