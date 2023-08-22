import styled from 'styled-components'

export const ModalPostsStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 22px;
  }

  .btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 24px;

    button {
      width: 90px;
    }
  }
`
