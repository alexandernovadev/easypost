import React from 'react'
import { NavbarStyle } from './navbar.style'
import loogMain from '../../../../assets/logoMain.svg'
import menu from '../../../../assets/menuhamburger.svg'
import { Typography } from '../../atoms/typography/Typography'
import { themeLight } from '../../../../themes/themeLight'

export const Nabvar = () => {
  return (
    <NavbarStyle>
      <img src={loogMain} alt="" />
      <Typography  variant='subtitle' text='Easy Media' color={themeLight.colors.textContrast}  />
      <img src={menu} alt="" />

    </NavbarStyle>
  )
}
