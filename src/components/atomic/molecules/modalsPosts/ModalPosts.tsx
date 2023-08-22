import { Modal } from '../../atoms/modal/Modal'
import { CircleSucces } from '../../../../assets/Components/CircleSucces'
import { Typography } from '../../atoms/typography/Typography'
import { themeLight } from '../../../../themes/themeLight'
import { Button } from '../../atoms/button/Button'
import { ModalPostsProps } from './ModalPosts.type'
import { ModalPostsStyle } from './ModalPosts.style'
import { TimesError } from '../../../../assets/Components/TimesError'

export const ModalPosts = ({
  modalOpen,
  setmodalOpen,
  variant = 'SUCCESS',
}: ModalPostsProps) => {
  return (
    <Modal isOpen={modalOpen} onClose={setmodalOpen}>
      <ModalPostsStyle>

        <section className='info'>

        {variant === 'ERROR' ? <TimesError /> : <CircleSucces />}

        <Typography
          text={variant === 'ERROR' ? 'Uppss Try Later' : 'Post Created'}
          variant="subtitle"
          color={themeLight.colors.textGray300}
          />
          </section>
        <section className='btn'>
          <Button text="OK" onClick={setmodalOpen} />
        </section>
      </ModalPostsStyle>
    </Modal>
  )
}
