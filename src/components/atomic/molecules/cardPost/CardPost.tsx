import { CardPostStyle } from './cardpost.style'
import { CardPostProps } from './cardPost.type'
import { Typography } from '../../atoms/typography/Typography'
import { themeLight } from '../../../../themes/themeLight'
import { formatDate } from '../../../../utils/dateFormat'
import { generateSubstrWithUnderline } from '../../../../utils/highLightJSX'

export const CardPost = ({
  text,
  content = 'Write something fun',
  date = new Date('2022-01-22T00:25:54.648+00:00'),
  user,
  highlightTitle,
}: CardPostProps & { highlightTitle?: string }) => {

  const titleWithHighlight = highlightTitle
  ? generateSubstrWithUnderline(text!, highlightTitle)
  : text;

  
  return (
    <CardPostStyle>
      <div className="title">{titleWithHighlight}</div>
      <div className="content">
        {content}
        <section>
          <div>
            <Typography text={formatDate(date)} variant="capion" />
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
