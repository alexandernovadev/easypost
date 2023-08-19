import styled from 'styled-components'

export const CardPostStyle = styled.div`
  border: 1px solid #5f5e5e;
  border-radius: 16px;
  min-width: 330px;

  @media (max-width: 620px) {
    min-width: 100%;
  }

  .title {
    color: ${({ theme }) => theme.colors.white200};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 16px 9px;
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    background: ${({ theme }) => theme.colors.secondaryColor};
  }
  .content {
    background: ${({ theme }) => theme.colors.textGray400};
    padding: 16px 9px;

    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    min-height: 34px;

    section {
      width: 100%;
      display: flex;
      padding-top: 20px;
      justify-content: space-between;
      align-items: center;
    }
  }
`
