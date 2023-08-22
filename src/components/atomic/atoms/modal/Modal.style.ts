import styled from 'styled-components'

export const ModalStyle = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .modal-content {
    border-radius: 21px;
    background-color: ${({ theme }) => theme.colors.white400};

    max-width: 220px;
    width: 100%;
    max-height: 233px;
    padding: 20px;


  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;

    &:hover,
    &:focus {
      color: black;
      text-decoration: none;
    }
  }
`
