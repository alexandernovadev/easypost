import { FormLogin } from '../../molecules/formlogin/FormLogin'
import { PageLoginStyle } from './loginPage.style'

export const LoginPage = () => {
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
