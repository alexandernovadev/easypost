import styled from 'styled-components'
import { FormLogin } from './components/atomic/molecules/formlogin/FormLogin'

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
`

function App() {
  return (
    <StyledApp>
      <div
        style={{
          width: '320px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          left: '10%',
          border: '2px solid purple',
          padding: 40,
          gap: 20,
          borderRadius: 12,
        }}
      >
        <FormLogin />
      </div>
    </StyledApp>
  )
}

export default App
