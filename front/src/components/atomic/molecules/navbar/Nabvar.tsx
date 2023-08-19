import { useState, useEffect, useRef, useContext } from 'react'
import { NavbarStyle } from './navbar.style'
import loogMain from '../../../../assets/logoMain.svg'
import menu from '../../../../assets/menuhamburger.svg'
import { Typography } from '../../atoms/typography/Typography'
import { themeLight } from '../../../../themes/themeLight'
import { Link, useNavigate } from 'react-router-dom'
import { CreateIcon } from '../../../../assets/Components/CreateIcon'
import { AuthContext } from '../../../../contexts/auth/AuthContext'

export const Nabvar = () => {
  const { signout } = useContext(AuthContext)

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const navigate = useNavigate()
  const toogleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const goToHome = () => navigate('/allposthome')

  return (
    <NavbarStyle>
      <div className="menuLogo" onClick={goToHome}>
        <img src={loogMain} alt="Logo" />
        <Typography
          variant="subtitle"
          text="Easy Media"
          color={themeLight.colors.textContrast}
        />
      </div>
      <div className="menuH">
        <img src={menu} alt="Menu" onClick={toogleMenu} />
        {isMenuOpen && (
          <div className="menuOptions open" ref={menuRef}>
            <div className="titleSesion">Camilo Cifuentes</div>

            <Link to="/createpost" className="optionMenu">
              <CreateIcon />
              Create Publication
            </Link>

            <Link to="/myposts" className="optionMenu">
              <CreateIcon />
              My Publications
            </Link>

            <Link to="/allposthome" className="optionMenu">
              <CreateIcon />
              See All Publications
            </Link>

            <Link to="/" className="optionMenu" onClick={signout}>
              <CreateIcon />
              Logout
            </Link>
          </div>
        )}
      </div>
    </NavbarStyle>
  )
}
