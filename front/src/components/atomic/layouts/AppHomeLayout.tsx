import { Nabvar } from '../molecules/navbar/Nabvar'
import { AppHomeLayoutStyle } from './AppHomeLayout.style'

interface Props {
  children: JSX.Element | JSX.Element[] // Typing children to be a single element or an array of elements
}

export const AppHomeLayout = ({ children }: Props) => {
  return (
    <AppHomeLayoutStyle>
      <Nabvar />
      <div className="content">{children}</div>
    </AppHomeLayoutStyle>
  )
}
