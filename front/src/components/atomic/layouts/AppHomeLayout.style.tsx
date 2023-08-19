import styled from 'styled-components'

export const AppHomeLayoutStyle = styled.div`
  max-width: 1080px;
  width: 1080px;
  height: 100vh;
  overflow: auto;

  .titlecard {
    padding-top: 20px;

    div {
      padding-top: 10px;
    }
  }

  .content {
    padding: 14px 24px;
  }
  @media (max-width: 1080px) {
    width: 100%;
  }
`
