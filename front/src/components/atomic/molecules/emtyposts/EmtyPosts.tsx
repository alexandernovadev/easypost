import { SmilesEmpty } from '../../../../assets/Components/SmilesEmpty'
import { Typography } from '../../atoms/typography/Typography'
import { EmptyPostStyle } from './EmptyPost.style'

export const EmtyPosts = () => {
  return (
    <EmptyPostStyle>
      <SmilesEmpty />
      <Typography
        variant="titleForm"
        text="Nothing to see here"
        color="rgba(51, 51, 51, 0.70)"
      />
    </EmptyPostStyle>
  )
}
