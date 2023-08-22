import { FormRegister } from '../../molecules/formregister/FormRegister'
import { PageLoginStyle } from './registerPage.style'

export const RegisterPage = () => {
  return (
    <PageLoginStyle>
      <div
        style={{
          width: '320px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          padding: 40,
          gap: 20
        }}
      >
        <FormRegister />
      </div>
    </PageLoginStyle>
  )
}
