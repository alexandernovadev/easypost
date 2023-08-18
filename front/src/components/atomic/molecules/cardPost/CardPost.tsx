import { CardPostStyle } from './cardpost.style'
import { CardPostProps } from './cardPost.type'
import { Typography } from '../../atoms/typography/Typography'
import { themeLight } from '../../../../themes/themeLight'

export const CardPost = ({
  text,
  content = 'Write something fun',
}: CardPostProps) => {
  return (
    <CardPostStyle>
      <div className="title">{text}</div>
      <div className="content">
        {content}
        <section>
          <div>
            <Typography text="20/57/2030" variant="capion" />
          </div>
          <div>
            <Typography text="Daniela Gomez"variant='subtitle'  color={themeLight.colors.white200} />
          </div>
        </section>
      </div>
    </CardPostStyle>
  )
}
