import { Typography } from '../atoms/typography/Typography'
import { Nabvar } from '../molecules/navbar/Nabvar'
import { AppHomeLayoutStyle } from './AppHomeLayout.style'

interface Props {
  children: JSX.Element | JSX.Element[]
  title: string
}

export const AppHomeLayout = ({ children, title }: Props) => {
  return (
    <AppHomeLayoutStyle>
      <Nabvar />

      <div className="content">
        <span className="titlecard">
          <Typography variant="title" text={title} />
        </span>

        {children}
      </div>
    </AppHomeLayoutStyle>
  )
}
