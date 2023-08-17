import { FormLogin } from '../../molecules/formlogin/FormLogin'
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
        <FormLogin />
      </div>
    </PageLoginStyle>
  )
}
