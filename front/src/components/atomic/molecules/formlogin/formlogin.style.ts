import styled from 'styled-components'

export const FormLoginStyle = styled.div`
  .imgtiles {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title .subtitle .titleForm {
      margin-bottom: 5px;
      margin-top: 5px;
    }
  }
  .inputs {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  .buttonpluslin {
    margin-top: 25px;

    div {
      text-align: right;
      padding-top: 32px;
    }
  }

  .errorFormL {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 28px;

    span {
      color: ${({ theme }) => theme.colors.errorColor};
      font-size: 10px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`
