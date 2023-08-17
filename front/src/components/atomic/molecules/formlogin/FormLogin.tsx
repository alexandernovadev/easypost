import logo from '../../../../assets/imagelogo.svg'
import { Anchor } from '../../atoms/anchor/Anchor'
import { Button } from '../../atoms/button/Button'
import { Input } from '../../atoms/input/Input'
import { Typography } from '../../atoms/typography/Typography'
import { FormLoginStyle } from './formlogin.style'

export const FormLogin = () => {
  return (
    <FormLoginStyle>
      <section className="imgtiles">
        <img src={logo} alt="logo" />
        <div className="title">
          <Typography variant="title" text="Easy Media" />
        </div>
        <div className="subtitle">
          <Typography variant="subtitle" text="Now, share is easy" />{' '}
        </div>
        <div className="titleForm">
          <Typography variant="titleForm" text="Sign In" />{' '}
        </div>
      </section>

      <section className="inputs">
        <Input label="email" placeholder="example@email.com" />
        <Input label="password" type="password" placeholder="•••••••••" />
      </section>

      <section className="buttonpluslin">
        <Button text="SIGN IN" />
        <div className="errorFormL">
          <span>Invalid email or password</span>
        </div>

        <div>
          <Typography variant="capion" text="Don’t have an account?" />{' '}
          <Anchor
            text="Sing up Here"
            href="/register"
            type="BLANCK"
            variant="default"
          />
        </div>
      </section>
    </FormLoginStyle>
  )
}
