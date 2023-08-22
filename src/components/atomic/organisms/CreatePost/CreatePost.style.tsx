import styled from 'styled-components'

export const CreatePostStyle = styled.div`

  form {
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    .buttonsection {
      display: flex;
      justify-content: flex-end;

      * {
        max-width: 90px;
      }
    }
  }
`
