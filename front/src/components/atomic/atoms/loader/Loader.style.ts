import styled from 'styled-components'

export const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  gap: 32px;

  .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid ${({ theme }) => theme.colors.white200};
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
