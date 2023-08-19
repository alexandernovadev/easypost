import { CardPostStyle } from './cardpost.style'
import { CardPostProps } from './cardPost.type'
import { Typography } from '../../atoms/typography/Typography'
import { themeLight } from '../../../../themes/themeLight'

const formatDate = (unixTimestamp: number): string => {
  const date = new Date(unixTimestamp * 1000) // Convertir a milisegundos

  // Formateo de la fecha
  const day = `0${date.getDate()}`.slice(-2)
  const month = `0${date.getMonth() + 1}`.slice(-2)
  const year = `${date.getFullYear()}`.slice(-2)

  // Formateo de la hora
  let hours: string | number = date.getHours()
  const minutes: string = `0${date.getMinutes()}`.slice(-2)
  const ampm: string = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // La hora '0' debe ser '12' en formato 12H

  return `${hours}:${minutes} ${ampm} ${day}/${month}/${year}`
}

export const CardPost = ({
  text,
  content = 'Write something fun',
  date = '20/57/2030',
  user ,
}: CardPostProps) => {
  return (
    <CardPostStyle>
      <div className="title">{text}</div>
      <div className="content">
        {content}
        <section>
          <div>
            <Typography text={formatDate(+date)} variant="capion" />
          </div>
          <div>
            <Typography
              text={user?.name || 'Sin Name'}
              variant="subtitle"
              color={themeLight.colors.white200}
            />
          </div>
        </section>
      </div>
    </CardPostStyle>
  )
}
