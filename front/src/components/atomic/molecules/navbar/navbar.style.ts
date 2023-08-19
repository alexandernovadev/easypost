import styled from 'styled-components'

export const NavbarStyle = styled.nav`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 22px;

  .menuLogo{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  .menuH {
    position: relative; // Make it relative so the dropdown is positioned based on this

    img {
      cursor: pointer; // Show that the image is clickable
    }

    .menuOptions {
      display: none; // Initially hide the menu
      position: absolute; // Absolute position to show it just below the hamburger icon
      top: 100%; // Position it just below the parent div
      right: 0; // Align it to the right
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid #ccc;
      border-radius: 12px;
      z-index: 1; // To show it above other elements
      min-width: 145px;
      display: flex;
      flex-direction: column;
      overflow: auto;

      .titleSesion {
        color: #0e2248;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border-bottom: 1px solid #dddada;
        padding-bottom: 4px;
        margin-bottom: 6px;
        text-align: center;
        padding: 10px;
      }

      .optionMenu {
        padding: 10px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 7px;
        padding-top: 4px;

      
          cursor: pointer;
          color: #0e2248;
          font-family: Lato;
          font-size: 13px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          text-decoration: none;
        
        &:hover {
          background-color: #DDDADA;
        }
      }
      &.open {
        // Add a class to show the menu
        display: block;
      }
    }
  }
`
