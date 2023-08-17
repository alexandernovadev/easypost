import { FormRegisterStyle } from './formregister.style'
import { Typography } from '../../atoms/typography/Typography'
import { Anchor } from '../../atoms/anchor/Anchor'
import { Button } from '../../atoms/button/Button'
import { Input } from '../../atoms/input/Input'
import logo from '../../../../assets/imagelogo.svg'

export const FormRegister = () => {
  return (
    <FormRegisterStyle>
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

      <form action="">
        <section className="inputs">
          <Input label="nombre" placeholder="Camilo Cifuentes" />
          <Input label="email" placeholder="example@email.com" />
          <Input label="password" type="password" placeholder="•••••••••" />
          <Input
            label="Confirm password"
            type="password"
            placeholder="•••••••••"
          />
        </section>

        <section className="buttonpluslin">
          <Button text="SIGN UP" />

          <div>
            <Typography variant="capion" text="Already have an account? " />{' '}
            <Anchor
              text="Login"
              href="/login"
              type="BLANCK"
              variant="default"
            />
          </div>
        </section>
      </form>
    </FormRegisterStyle>
  )
}
