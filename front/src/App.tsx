import styled from "styled-components";
import { Input } from "./components/atomic/atoms/input/Input";
import { Button } from "./components/atomic/atoms/button/Button";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  color: ${({ theme }) => theme.colors.white};
`;

function App() {
  return <StyledApp>Hola marte

  <div style={{
    width:"320px",
    position:'relative',
    display:'flex',
    flexDirection:'column',
    left:'10%',
    border:'2px solid purple',
    padding:40,
    gap:20,
    borderRadius:12
  }}>

    <Input label="email"/>
    <Input label="password" type="password"/>
    <Button text="SIGN UP" />
  </div>
  </StyledApp>;
}

export default App;
